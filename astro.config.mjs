import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
          repo: "https://github.com/xarxino/portfolio.git",
        },
        media_folder: "public",
        public_folder: "public",
        publish_mode: "editorial_workflow",
        collections: [
          // Content collections
          {
            name: "work",
            label: "Work",
            folder: "src/content/work",
            path: "work",
            create: true,
            fields: [
              {
                name: "thumbnail",
                label: "Thumbnail",
                widget: "image",
                required: true,
              },
              {
                name: "title",
                label: "Title",
                widget: "string",
                required: true,
              },
              {
                name: "tagline",
                label: "Tagline",
                widget: "string",
                required: true,
              },
              {
                name: "figmaUrl",
                label: "Figma URL",
                widget: "string",
                required: true,
              },
              {
                name: "tags",
                label: "Tags",
                widget: "list",
                fields: [
                  {
                    name: "name",
                    label: "Name",
                    widget: "string",
                    required: true,
                  },
                ],
              },
              {
                name: "content",
                label: "Content",
                widget: "markdown",
                required: true,
              },
            ],
          },
          {
            name: "testimonials",
            label: "Testimonials",
            folder: "src/content/testimonials",
            path: "testimonials",
            create: true,
            fields: [
              {
                name: "title",
                label: "Title",
                widget: "string",
                required: true,
              },
              {
                name: "content",
                label: "Content",
                widget: "markdown",
                required: true,
              },
              {
                name: "referrer",
                label: "Referrer",
                widget: "object",
                fields: [
                  {
                    name: "name",
                    label: "Name",
                    widget: "string",
                    required: true,
                  },
                  {
                    name: "title",
                    label: "Title",
                    widget: "string",
                    required: true,
                  },
                  {
                    name: "picture",
                    label: "Picture",
                    widget: "image",
                    required: true,
                  },
                  {
                    name: "company",
                    label: "Company",
                    widget: "object",
                    fields: [
                      {
                        name: "name",
                        label: "Name",
                        widget: "string",
                        required: true,
                      },
                      {
                        name: "url",
                        label: "URL",
                        widget: "string",
                        required: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    }),
  ],
});
