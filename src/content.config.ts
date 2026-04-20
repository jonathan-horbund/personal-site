import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    featured: z.boolean().default(false),
    role: z.string().optional(),
    timeline: z.string().optional(),
    tldr: z.string().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    excerpt: z.string().optional(),
  }),
});

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
    prepTime: z.string(),
    cookTime: z.string(),
    serves: z.number(),
    cuisine: z.string().optional(),
    story: z.string().optional(),
  }),
});

export const collections = { work, writing, recipes };
