import { defineCollection, z } from "astro:content";

const workCollection = defineCollection({
  schema: z.object({
    pubDate: z.date(),
    thumbnail: z.string(),
    title: z.string(),
    tagline: z.string(),
    figmaUrl: z.string().url().optional(),
    siteUrl: z.string().url().optional(),
    services: z.array(z.string()),
    content: z.string(),
    gallery: z.array(z.string()).optional(),
  }),
});

const testimonialsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    content: z.string(),
    referrer: z.object({
      name: z.string(),
      title: z.string(),
      picture: z.string(),
      company: z.object({
        name: z.string(),
        url: z.string().url(),
      }),
    }),
  }),
});

export const collections = {
  work: workCollection,
  testimonials: testimonialsCollection,
};
