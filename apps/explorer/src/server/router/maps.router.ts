import { MapsTextsearchSchema, MapsDetailSearchSchema } from '@/schema/maps.schema'
import { publicProcedure, router } from './trpc'
import axios from 'axios'

export const mapsRouter = router({
  // Maps Textsearch =>
  textSearch: publicProcedure
    .input(MapsTextsearchSchema)
    .query(async ({ ctx, input }) => {
      return await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?location=${input.location.lat}%2C${input.location.lng}&radius=${input.radius}&type=establishment&query=${input.query}&key=${process.env.NEXT_PUBLIC_GMAPS_API}`
      ).then((res) => res.json())
    }),
  detailSearch: publicProcedure
    .input(MapsDetailSearchSchema)
    .mutation(async ({ ctx, input }) => {
      // return await fetch(
      //   `https://maps.googleapis.com/maps/api/place/details/json?place_id=${input.place_id}&key=${process.env.NEXT_PUBLIC_GMAPS_API}`
      // ).then((res) => res.json())
      const result = await Promise.allSettled(
        input.place_ids.map(async (place_id) => {
          return await axios
            .get(
              `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${process.env.NEXT_PUBLIC_GMAPS_API}`
            )
            .then((res) => res.data)
        })
      )
      return result
    }),
})
