import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import NetlifyCMS from 'astro-netlify-cms';

export default defineConfig({
  integrations: [
        sitemap(),
        NetlifyCMS({
            config: {
              backend: {
                name: 'git-gateway',
                branch: 'main',
              },
              collections: [
                // Content collections
              ],
            },
          }),
    ],
  site: "https://pulent.com",
});