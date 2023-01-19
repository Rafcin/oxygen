import { z } from 'zod'
import axios from 'axios'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'

export const mapsRouter = createTRPCRouter({
  locations: publicProcedure
    .input(
      z.object({
        location: z.object({
          lat: z.number(),
          lng: z.number(),
        }),
        radius: z.number(),
        query: z.string(),
      })
    )
    .query(async ({ input }) => {
      return await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?location=${input.location.lat}%2C${input.location.lng}&radius=${input.radius}&type=establishment&query=${input.query}&key=${process.env.NEXT_PUBLIC_GMAPS_API}`
      ).then((res) => res.json())
    }),
})
