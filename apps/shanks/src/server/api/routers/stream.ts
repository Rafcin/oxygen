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
});
