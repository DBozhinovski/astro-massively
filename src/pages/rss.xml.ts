import rss from '@astrojs/rss';
import { SITE } from '../config';

interface Post {
  url: string;
  frontmatter: any;
}

export const get = () =>
  rss({
    // `<title>` field in output xml
    title: 'Massively',
    // `<description>` field in output xml
    description: 'Massively port to astro',
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: SITE.url,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: import.meta.glob('./blog/**/*.md'),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
