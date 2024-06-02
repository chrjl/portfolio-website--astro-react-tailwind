import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
    created_date: z.date().optional(),
    modified_date: z.date().optional(),
    keywords: z.array(z.string()).optional(),
    description: z.string().optional(),
    links: z
      .array(
        z.object({
          type: z.string(),
          url: z.string(),
          description: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
