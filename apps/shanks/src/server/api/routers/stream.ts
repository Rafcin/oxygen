import axios from "axios";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const streamRouter = createTRPCRouter({
  search: protectedProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input }) => {
      return await axios
        .get(`https://api.consumet.org/anime/zoro/${input.query}`)
        .then((res) => res.data);
    }),
  details: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return await axios
        .get(`https://api.consumet.org/anime/zoro/info?id=${input.id}`)
        .then((res) => res.data);
    }),
  meta: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return await axios
        .get(`https://api.consumet.org/meta/anilist/info/${String(input.id)}`)
        .then((res) => res.data);
    }),
});
