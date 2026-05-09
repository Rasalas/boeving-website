# Hotel Böving — Website

Familienhotel garni in Breckerfeld seit 1890. Eine Astro-Site, die die WordPress-Vorgängerin ersetzt.

## Setup

```bash
npm install
npm run dev
```

Dev-Server läuft auf <http://localhost:4321/>.

## Build

```bash
# Lokal / Produktion (boeving.de root)
npm run build

# GitHub Pages Staging (Subpath /boeving-website/)
DEPLOY_TARGET=pages npm run build
```

## Deployment

- **Staging**: GitHub Pages, automatisch über GitHub Actions bei jedem Push auf `main`.
  URL: <https://rasalas.github.io/boeving-website/>
- **Produktion**: Statische Files aus `dist/` auf den Webserver — Astro generiert reine HTML/CSS/JS.

## Struktur

```
src/
├── pages/         9 Routen (index, hotel, zimmer, fruehstueck, umgebung, kontakt, impressum, datenschutz, agb)
├── components/    Header, Footer, TopNotice, BookButton, SectionLabel, Star, PageHero
├── data/site.ts   Single source of truth (Adresse, Zimmer, Buchungs-URL, Rabatte)
├── layouts/       Layout.astro
├── styles/        global.css (Designsystem)
└── utils/asset.ts BASE_URL-Helper für Subpath-fähige Pfade
```

## Inhalte ändern

- Texte und Stammdaten: `src/data/site.ts`
- Zimmer: dort im `rooms`-Array
- Direktbuchungs-URL (Viato): `site.booking.directUrl`
- Rabatte: `site.booking.directDiscount`, `site.booking.weekendDiscount`

## Designsystem

- Brand-Navy: `--color-ink-700` (#112655), -900 (#08132a)
- Brand-Gold: `--color-gold-500` (#d9b25c), -300, -700
- Paper-Cream: `--color-paper` (#f7f2e6)
- Display-Font: Fraunces (variable)
- Italic-Akzente: Instrument Serif
- UI-Sans: Manrope
- Mono / Zahlen: JetBrains Mono
