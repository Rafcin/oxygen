import z from 'zod'

export const MapsTextsearchSchema = z.object({
  location: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
  radius: z.number(),
  query: z.string(),
})
