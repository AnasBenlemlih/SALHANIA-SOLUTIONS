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
npm run build
npm run preview
```

Le build de production est généré dans `dist/`. Le site est configuré pour un déploiement statique sur Cloudflare Pages.

## Mesure des performances sur Vercel

La page d'accueil intègre Vercel Analytics et Speed Insights. Activer Speed Insights
dans le tableau de bord du projet Vercel, puis redéployer le site pour collecter
les mesures de performance des visiteurs. Les bloqueurs de contenu peuvent
empêcher la collecte.

## Organisation

- `src/pages/` : pages routées par Astro.
- `src/styles/` : styles globaux et fondation Tailwind.
- `src/components/` : composants réutilisables à ajouter avec les étapes de conception.
- `src/content/` : contenu éditorial structuré, à alimenter uniquement avec des informations vérifiées.
- `public/` : fichiers servis tels quels, dont `robots.txt`.

Les services, réalisations, clients et certifications ne sont pas inventés; les contenus correspondants seront publiés lorsque des informations réelles seront disponibles.
