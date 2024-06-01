import { z, defineCollection } from 'astro:content';

const stubsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    created_date: z.date().optional(),
    modified_date: z.date().optional(),
    keywords: z.array(z.string()).optional(),
    links: z
      .object({
        type: z.enum(['repo', 'doc', 'asset', 'code', 'link', 'target']),
        url: z.string(),
        description: z.string().optional(),
      })
      .optional(),
  }),
});
