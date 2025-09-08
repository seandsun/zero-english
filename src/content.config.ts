import { defineCollection, z } from "astro:content";

const english = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.string(),
    links: z.array(
      z.object({
        href: z.string(),
        text: z.string(),
      })
    ).optional() // Por si alguna pagina no lo tiene
  })
})

export const collections = { english }