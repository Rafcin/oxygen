import { MapsTextsearchSchema } from '@/schema/maps.schema'
import { publicProcedure, router } from './trpc'

export const mapsRouter = router({
  // Maps Textsearch =>
  textSearch: publicProcedure
    .input(MapsTextsearchSchema)
    .query(async ({ ctx, input }) => {
      return await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?location=${input.location.lat}%2C${input.location.lng}&radius=${input.radius}&type=establishment&query=${input.query}&key=${process.env.NEXT_PUBLIC_GMAPS_API}`
      ).then((res) => res.json())
    }),
})
