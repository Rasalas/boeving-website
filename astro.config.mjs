import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const isPages = process.env.DEPLOY_TARGET === 'pages';

export default defineConfig({
  site: isPages
    ? 'https://rasalas.github.io'
    : 'https://boeving.de',
  base: isPages ? '/boeving-website/' : '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    domains: [],
  },
});
