// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import sitemap from "@astrojs/sitemap";
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import relativeLinks from 'astro-relative-links';

export default defineConfig({
  site: 'https://cesarmc-port.github.io',
  base: '/portfolio',
  integrations: [vue(), sitemap({
    serialize(item) {
      if (item.url === 'https://cesarmc-port.github.io/portfolio') {
        // @ts-ignore: conflicto sitemap type changefreq 
        item.changefreq = 'daily';
        item.lastmod = '2026-11-22'; 
        item.priority = 1.0;
      }

      return item;
    },
  }), tailwind(), relativeLinks()],
  output: 'static',
  adapter: node({ mode: 'standalone' })
});