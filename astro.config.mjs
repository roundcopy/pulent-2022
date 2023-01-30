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
                repo: 'roundcopy/pulent-2022',
                branch: 'master',
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
                      { name: 'core_topic', widget: 'boolean', label: 'Core Topic', default: false },
                      { name: 'slug', widget: 'string', label: 'Slug', default: false },
                      { name: 'tags', widget: 'list', label: 'Tags', default: false },
                      { name: 'description', widget: 'string', label: 'Description', required: false },
                      { name: 'hero', widget: 'image', choose_url: true, media_folder: '/public/images', label: 'Hero Image', default: false },
                      {
                        name: 'date',
                        widget: 'datetime',
                        format: 'YYYY-MM-DDTHH:mm:ssZ',
                        date_format: 'DD MMM YYYY',
                        time_format: false,
                        label: 'Publish Date',
                      },
                      { name: 'author', widget: 'string', label: 'Author Name', required: false, default: 'Nikola Balić' },
                      { name: 'body', widget: 'markdown', label: 'Post Body' },
                      {
                        name: 'layout',
                        widget: 'hidden',
                        default: '../../layouts/BlogPostLayout.astro',
                      },
                    ],
                },
              ],
            },
          }),
    ],
  site: "https://pulent.com",
});