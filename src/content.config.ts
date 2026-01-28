import { defineCollection, z } from 'astro:content';

const releases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    releaseDate: z.string(),
    type: z.enum(['ep', 'album', 'single']),
    cover: z.string(),
    bandcampUrl: z.string().url(),
    appleMusicUrl: z.string().url().optional(),
    spotifyUrl: z.string().url().optional(),
    bandLinkUrl: z.string().url().optional(),
    bandcampEmbed: z.string().optional(),
    description: z.string(),
    descriptionEn: z.string().optional(),
    tracks: z.array(z.object({
      title: z.string(),
      duration: z.string(),
    })),
    credits: z.object({
      guitar: z.string().optional(),
      vocals: z.string().optional(),
      drums: z.string().optional(),
      bass: z.string().optional(),
      recording: z.string().optional(),
      mixing: z.string().optional(),
      studio: z.string().optional(),
      artwork: z.string().optional(),
    }),
    featured: z.boolean().default(false),
  }),
});

const shows = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    venue: z.string(),
    city: z.string(),
    country: z.string().default('Россия'),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    price: z.string().optional(),
    ticketUrl: z.string().url().optional(),
    eventUrl: z.string().url().optional(),
    poster: z.string().optional(),
    lineup: z.array(z.string()).optional(),
    isPast: z.boolean().default(false),
  }),
});

export const collections = { releases, shows };
