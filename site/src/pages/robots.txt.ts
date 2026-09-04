import type { APIRoute } from 'astro';

// Generated rather than kept in /public so the sitemap URL always tracks the
// `site` value in astro.config.mjs. A hardcoded copy silently pointed at the
// old host the moment the domain changed.
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('sitemap-index.xml', site).href;

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
};
