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
              media_folder: 'public/images',
              public_folder: '/images',
              publish_mode: 'editorial_workflow',
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
                    { name: 'core_topic', widget: 'boolean', label: 'Core Topic', default: false, required: false },
                    { name: 'slug', widget: 'string', label: 'Slug', default: false },
                    { name: 'tags', widget: 'list', label: 'Tags', default: false },
                    { name: 'description', widget: 'string', label: 'Description', required: false },
                    { name: 'hero', widget: 'image', choose_url: true, label: 'Hero Image', default: false },
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
              {
                name: 'letters',
                label: 'Letters',
                label_singular: 'Letters',
                folder: 'src/pages/letters',
                create: true,
                delete: true,
                fields: [
                  { name: 'title', widget: 'string', label: 'Letter Title' },
                  { name: 'number', widget: 'string', label: 'Letter No.' },
                  { name: 'slug', widget: 'string', label: 'Slug', default: false },
                  { name: 'tags', widget: 'list', label: 'Tags', default: false },
                  { name: 'description', widget: 'string', label: 'Description', required: false },
                  {
                    name: 'date',
                    widget: 'datetime',
                    format: 'YYYY-MM-DDTHH:mm:ssZ',
                    date_format: 'DD MMM YYYY',
                    time_format: false,
                    label: 'Publish Date',
                  },
                  { name: 'author', widget: 'string', label: 'Author Name', required: false, default: 'Nikola Balić' },
                  { name: 'body', widget: 'markdown', label: 'Letter Body' },
                  {
                    name: 'layout',
                    widget: 'hidden',
                    default: '../../layouts/LetterLayout.astro',
                  },
                ],
              },

              ],
            },
          }),
    ],
  site: "https://pulent.com",
});