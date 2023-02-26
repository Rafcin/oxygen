import axios from "axios";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

const SERVER_STREAMS = [
  "vidcloud",
  "streamsb",
  "vidstreaming",
  "streamtape",
] as const;
const SEVER_STREAMS_ZOD_ENUM = z.enum(SERVER_STREAMS).optional();

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
        .get(
          `https://api.consumet.org/meta/anilist/info/${String(
            input.id
          )}?provider=zoro`
        )
        .then((res) => res.data);
    }),
  video: protectedProcedure
    .input(z.object({ id: z.string(), server: SEVER_STREAMS_ZOD_ENUM }))
    .query(async ({ input }) => {
      return await axios
        .get(`https://api.consumet.org/anime/zoro/watch?episodeId=${input.id}`)
        .then((res) => res.data);
    }),
});
