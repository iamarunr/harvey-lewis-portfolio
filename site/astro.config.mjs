import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Drives canonical URLs, og:url and the sitemap. Change this to the production
  // domain before launch — everything downstream follows from it.
  site: 'https://harvey-lewis-portfolio.pages.dev',
  integrations: [
    sitemap({
      // /press is a redirect stub kept for old inbound links — not worth indexing.
      filter: (page) => !/\/press\/?$/.test(page),
    }),
  ],
});
