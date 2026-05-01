import { defineConfig } from 'astro/config';

const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://raisingimpact.org');

export default defineConfig({
  site,
});
