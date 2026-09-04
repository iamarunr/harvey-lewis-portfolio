import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Drives canonical URLs, og:url and the sitemap. Change this to the production
  // domain before launch — everything downstream follows from it.
  site: 'https://harvey-lewis-portfolio.pages.dev',
  integrations: [
    sitemap({
      // /press is a redirect stub and /404 should not be in the sitemap.
      filter: (page) => !/\/press\/?$/.test(page) && !/\/404\/?$/.test(page),
    }),
  ],
});
