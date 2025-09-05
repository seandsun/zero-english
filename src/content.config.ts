import { defineCollection, z } from "astro:content";

const english = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.string(),
  })
})

export const collections = { english }