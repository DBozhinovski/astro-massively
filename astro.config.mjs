import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { SITE } from './src/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  server: {
    host: '0.0.0.0',
  },
  site: SITE.url,
});
