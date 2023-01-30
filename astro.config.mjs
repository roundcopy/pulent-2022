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
                branch: 'roundcopy/pulent-2022',
              },
              collections: [
                {
                    name: 'posts',
                    label: 'Posts',
                    label_singular: 'Post',
                    folder: 'src/pages/posts',
                    create: true,
                    delete: true,
                    fields: [
                      { name: 'title', widget: 'string', label: 'Post Title' },
                      {
                        name: 'publishDate',
                        widget: 'datetime',
                        format: 'DD MMM YYYY',
                        date_format: 'DD MMM YYYY',
                        time_format: false,
                        label: 'Publish Date',
                      },
                      { name: 'author', widget: 'string', label: 'Author Name', required: false },
                      { name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
                      { name: 'description', widget: 'string', label: 'Description', required: false },
                      { name: 'body', widget: 'markdown', label: 'Post Body' },
                      {
                        name: 'layout',
                        widget: 'select',
                        default: '../../layouts/BlogPosLayout.astro',
                        options: [
                          { label: 'Post', value: '../../layouts/BlogPosLayout.astro' },
                        ],
                      },
                    ],
                },
              ],
            },
          }),
    ],
  site: "https://pulent.com",
});