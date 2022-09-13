import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), mdx(), sitemap()],
  server: {
    host: "0.0.0.0",
  },
  site: "https://astro-massively.tld",
});
