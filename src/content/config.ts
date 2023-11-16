import { defineCollection, z } from "astro:content";

const workCollection = defineCollection({
  schema: z.object({
    pubDate: z.date(),
    thumbnail: z.string(),
    title: z.string(),
    tagline: z.string(),
    figmaUrl: z.string(),
    tags: z.array(z.string()),
    content: z.string(),
  }),
});

const testimonialsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    content: z.string(),
    referrer: {
      name: z.string(),
      jobTitle: z.string(),
      picture: z.string(),
      company: {
        name: z.string(),
        url: z.string(),
      },
    },
  }),
});

export const collections = {
  work: workCollection,
};
