import { z } from 'zod';

const services = ['vending', 'supplies', 'workplace', 'logistics', 'businessServices', 'multiple'] as const;
const schema = z.object({
	name: z.string().trim().min(1).max(100),
	company: z.string().trim().min(1).max(120),
	email: z.string().trim().max(160).pipe(z.email()),
	phone: z.string().trim().max(40),
	service: z.enum(services),
	location: z.string().trim().min(1).max(150),
	description: z.string().trim().min(1).max(3000),
	website: z.literal(''),
	requestId: z.uuid(),
});

const reply = (status: number, code: string) =>
	Response.json({ code }, { status, headers: { 'Cache-Control': 'no-store' } });

export default {
	async fetch(request: Request): Promise<Response> {
		if (request.method !== 'POST') return reply(405, 'method');
		if (request.headers.get('origin') !== new URL(request.url).origin) return reply(403, 'origin');
		if (!request.headers.get('content-type')?.startsWith('application/json')) return reply(415, 'format');
		let body: unknown;
		try {
			const text = await request.text();
			if (new TextEncoder().encode(text).length > 20000) return reply(413, 'size');
			body = JSON.parse(text);
		} catch {
			return reply(400, 'invalid');
		}
		const parsed = schema.safeParse(body);
		if (!parsed.success) return reply(400, 'invalid');
		const { RESEND_API_KEY, QUOTE_FROM_EMAIL, QUOTE_TO_EMAIL } = process.env;
		if (!RESEND_API_KEY || !QUOTE_FROM_EMAIL || QUOTE_TO_EMAIL !== 'contact@salhania-solutions.fr') {
			console.error('Quote email configuration missing or invalid.');
			return reply(503, 'unavailable');
		}
		const data = parsed.data;
		const text = [
			'Demande de devis — SALHANIA SOLUTIONS',
			`Nom : ${data.name}`,
			`Entreprise : ${data.company}`,
			`E-mail : ${data.email}`,
			`Téléphone : ${data.phone || 'Non renseigné'}`,
			`Service : ${data.service}`,
			`Lieu : ${data.location}`,
			'',
			data.description,
		].join('\n');
		try {
			const result = await fetch('https://api.resend.com/emails', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${RESEND_API_KEY}`,
					'Content-Type': 'application/json',
					'Idempotency-Key': `quote-${data.requestId}`,
				},
				body: JSON.stringify({
					from: QUOTE_FROM_EMAIL,
					to: [QUOTE_TO_EMAIL],
					reply_to: data.email,
					subject: 'Demande de devis — SALHANIA SOLUTIONS',
					text,
				}),
				signal: AbortSignal.timeout(10000),
			});
			if (!result.ok) {
				console.error('Resend rejected quote notification:', result.status);
				return reply(502, 'unavailable');
			}
			const resultBody: unknown = await result.json();
			if (!z.object({ id: z.string().min(1) }).safeParse(resultBody).success) {
				console.error('Resend returned an unexpected response.');
				return reply(502, 'unavailable');
			}
			return reply(200, 'accepted');
		} catch {
			console.error('Quote notification request failed or timed out.');
			return reply(502, 'unavailable');
		}
	},
};
