# SALHANIA SOLUTIONS

Site vitrine statique construit avec Astro, TypeScript et Tailwind CSS 4.

## Prérequis

- Node.js `>=22.23.4`
- npm

## Commandes

```sh
npm ci
npm run dev
npm run check
npm test
npm run build
npm run preview
```

Le build de production est généré dans `dist/`. Les pages restent statiques sur Vercel ;
la fonction `api/quote.ts` transmet les demandes de devis via Resend.

## Demandes de devis

Configurer dans Vercel, uniquement côté serveur : `RESEND_API_KEY`,
`QUOTE_FROM_EMAIL` (adresse du domaine vérifié dans Resend) et
`QUOTE_TO_EMAIL=contact@salhania-solutions.fr`. Ne pas préfixer ces variables par
`PUBLIC_` ni les enregistrer dans Git. Redéployer après configuration.

Avant de publier, configurer Vercel Firewall pour limiter les requêtes POST sur
`/api/quote` par IP (par exemple 5 par minute, à ajuster), avec blocage des abus.
Cette règle nécessite la disponibilité de la fonctionnalité sur votre offre.
Le champ piège et la validation serveur ne remplacent pas cette limite.
Ne pas utiliser un compteur en mémoire : les fonctions peuvent avoir plusieurs instances.

Le formulaire FR/EN conserve les données en cas d'échec, empêche les doubles clics
et réutilise une clé d'idempotence lors d'une nouvelle tentative sans modification.
La confirmation signifie acceptation par Resend, pas livraison garantie.
Le destinataire est fixé côté serveur ; Répondre utilise l'adresse du prospect.
La messagerie directe reste disponible en alternative.

`astro dev` et `astro preview` ne servent pas les fonctions Vercel :
tester l'envoi sur un déploiement Preview avec ses variables configurées, ou avec
`vercel dev`. Vérifier réception, indésirables et adresse de réponse avant production.
Compléter la politique de confidentialité avec les informations réelles de traitement
et de conservation avant ouverture publique.

## Mesure des performances sur Vercel

La page d'accueil intègre Vercel Analytics et Speed Insights. Activer Speed Insights
dans le tableau de bord du projet Vercel, puis redéployer le site pour collecter
les mesures de performance des visiteurs. Les bloqueurs de contenu peuvent
empêcher la collecte.

## Organisation

- `src/pages/` : pages routées par Astro.
- `src/i18n/translations.ts` : traductions centralisées des contenus de chaque langue.
- `src/components/HomePage.astro` : structure partagée des pages d’accueil.
- `src/layouts/SiteLayout.astro` : métadonnées localisées, navigation, langue et pied de page.
- `src/styles/` : styles globaux et fondation Tailwind.
- `src/components/` : structure de page et composants réutilisables.
- `src/content/` : contenu éditorial structuré, à alimenter uniquement avec des informations vérifiées.
- `public/` : fichiers servis tels quels, dont `robots.txt`.

Les services, réalisations, clients et certifications ne sont pas inventés; les contenus correspondants seront publiés lorsque des informations réelles seront disponibles.

## Langues et traductions

Le français est la langue par défaut et conserve les URL sans préfixe (`/`). La version
anglaise est publiée sous `/en/`. Pour modifier un texte, une alternative d’image ou les
métadonnées d’une langue, mettez à jour l’entrée correspondante dans
`src/i18n/translations.ts`. La structure de la page reste partagée dans
`src/components/HomePage.astro`; gardez les identifiants de section identiques dans les
versions afin que le sélecteur puisse conserver les liens d’ancrage.

Lorsqu’une nouvelle page est ajoutée, créez ses deux routes localisées, ajoutez des
liens alternatifs réciproques et vérifiez son entrée au sitemap. Si une page n’a pas
d’équivalent traduit, son sélecteur de langue doit pointer explicitement vers l’accueil
de la langue choisie.

Les traductions anglaises des intitulés et descriptions de services (notamment
« Workplace equipment and fit-out » et « Business support services ») nécessitent une
validation métier avant publication.
