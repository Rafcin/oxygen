import { t, shieldedProcedure } from "./helpers/createRouter";
import { SanityFindUniqueSchema } from "../schemas/findUniqueSanity.schema";
import { SanityFindFirstSchema } from "../schemas/findFirstSanity.schema";
import { SanityFindManySchema } from "../schemas/findManySanity.schema";
import { SanityCreateOneSchema } from "../schemas/createOneSanity.schema";
import { SanityCreateManySchema } from "../schemas/createManySanity.schema";
import { SanityDeleteOneSchema } from "../schemas/deleteOneSanity.schema";
import { SanityUpdateOneSchema } from "../schemas/updateOneSanity.schema";
import { SanityDeleteManySchema } from "../schemas/deleteManySanity.schema";
import { SanityUpdateManySchema } from "../schemas/updateManySanity.schema";
import { SanityUpsertSchema } from "../schemas/upsertOneSanity.schema";
import { SanityAggregateSchema } from "../schemas/aggregateSanity.schema";
import { SanityGroupBySchema } from "../schemas/groupBySanity.schema";
import { SanityFindRawObjectSchema } from "../schemas/objects/SanityFindRaw.schema";
import { SanityAggregateRawObjectSchema } from "../schemas/objects/SanityAggregateRaw.schema";

export const sanitiesRouter = t.router({
  aggregateSanity: shieldedProcedure
    .input(SanityAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateSanity = await ctx.prisma.sanity.aggregate(input);
      return aggregateSanity;
    }),
  aggregateSanityRaw: shieldedProcedure
    .input(SanityAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateSanityRaw = await ctx.prisma.sanity.aggregateRaw(input);
      return aggregateSanityRaw;
    }),
  createManySanity: shieldedProcedure
    .input(SanityCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManySanity = await ctx.prisma.sanity.createMany(input);
      return createManySanity;
    }),
  createOneSanity: shieldedProcedure
    .input(SanityCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneSanity = await ctx.prisma.sanity.create(input);
      return createOneSanity;
    }),
  deleteManySanity: shieldedProcedure
    .input(SanityDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManySanity = await ctx.prisma.sanity.deleteMany(input);
      return deleteManySanity;
    }),
  deleteOneSanity: shieldedProcedure
    .input(SanityDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneSanity = await ctx.prisma.sanity.delete(input);
      return deleteOneSanity;
    }),
  findFirstSanity: shieldedProcedure
    .input(SanityFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstSanity = await ctx.prisma.sanity.findFirst(input);
      return findFirstSanity;
    }),
  findFirstSanityOrThrow: shieldedProcedure
    .input(SanityFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstSanityOrThrow = await ctx.prisma.sanity.findFirstOrThrow(input);
      return findFirstSanityOrThrow;
    }),
  findManySanity: shieldedProcedure
    .input(SanityFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManySanity = await ctx.prisma.sanity.findMany(input);
      return findManySanity;
    }),
  findSanityRaw: shieldedProcedure
    .input(SanityFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findSanityRaw = await ctx.prisma.sanity.findRaw(input);
      return findSanityRaw;
    }),
  findUniqueSanity: shieldedProcedure
    .input(SanityFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueSanity = await ctx.prisma.sanity.findUnique(input);
      return findUniqueSanity;
    }),
  findUniqueSanityOrThrow: shieldedProcedure
    .input(SanityFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueSanityOrThrow = await ctx.prisma.sanity.findUniqueOrThrow(input);
      return findUniqueSanityOrThrow;
    }),
  groupBySanity: shieldedProcedure
    .input(SanityGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupBySanity = await ctx.prisma.sanity.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySanity;
    }),
  updateManySanity: shieldedProcedure
    .input(SanityUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManySanity = await ctx.prisma.sanity.updateMany(input);
      return updateManySanity;
    }),
  updateOneSanity: shieldedProcedure
    .input(SanityUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneSanity = await ctx.prisma.sanity.update(input);
      return updateOneSanity;
    }),
  upsertOneSanity: shieldedProcedure
    .input(SanityUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneSanity = await ctx.prisma.sanity.upsert(input);
      return upsertOneSanity;
    }),

})
