// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site:'https://chineseonmill.github.io/',
    output: 'static',
    integrations: [
        tailwind(),
        sitemap(),
      ],
      markdown: {
        shikiConfig: {
          theme: 'github-light',
          wrap: true
        }
      }
});
