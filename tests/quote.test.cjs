const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

const source = ts.transpileModule(fs.readFileSync('api/quote.ts', 'utf8'), {
	compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;

function setup(upstream = async () => Response.json({ id: 'email-id' }), env = {
	RESEND_API_KEY: 'test-only',
	QUOTE_FROM_EMAIL: 'devis@notifications.example.com',
	QUOTE_TO_EMAIL: 'contact@salhania-solutions.fr',
}) {
	const exports = {};
	const calls = [];
	vm.runInNewContext(source, {
		exports, require, Response, TextEncoder, URL, AbortSignal,
		process: { env }, console: { error() {} },
		fetch: async (...args) => { calls.push(args); return upstream(...args); },
	});
	return { handler: exports.default.fetch, calls };
}

const payload = {
	name: 'Test', company: 'Test & Co', email: 'test@example.com', phone: '',
	service: 'vending', location: 'Paris', description: 'Café & thé\n20 personnes',
	website: '', requestId: '5ec3e620-5b1d-4efb-b99d-279c914b09f2',
};
function request(data = payload, origin = 'https://example.com') {
	return new Request('https://example.com/api/quote', {
		method: 'POST', headers: { origin, 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});
}

test('valid request reaches only the configured recipient with reply-to and idempotency', async () => {
	const { handler, calls } = setup();
	assert.equal((await handler(request())).status, 200);
	const message = JSON.parse(calls[0][1].body);
	assert.deepEqual(message.to, ['contact@salhania-solutions.fr']);
	assert.equal(message.reply_to, payload.email);
	assert.ok(message.text.includes(payload.description));
	assert.equal(calls[0][1].headers['Idempotency-Key'], `quote-${payload.requestId}`);
});
test('invalid fields, honeypot, cross-origin and oversized bodies never send email', async () => {
	const { handler, calls } = setup();
	for (const data of [{ ...payload, name: ' ' }, { ...payload, email: 'bad' }, { ...payload, service: 'unknown' }, { ...payload, website: 'bot' }]) {
		assert.equal((await handler(request(data))).status, 400);
	}
	assert.equal((await handler(request(payload, 'https://other.example'))).status, 403);
	assert.equal((await handler(request({ ...payload, description: 'a'.repeat(21000) }))).status, 413);
	assert.equal(calls.length, 0);
});
test('missing configuration and upstream failures cannot report success', async () => {
	assert.equal((await setup(undefined, {}).handler(request())).status, 503);
	assert.equal((await setup(async () => Response.json({}, { status: 429 })).handler(request())).status, 502);
	assert.equal((await setup(async () => { throw new Error('Network'); }).handler(request())).status, 502);
	assert.equal((await setup(async () => Response.json({})).handler(request())).status, 502);
});
