import { t, publicProcedure } from "./helpers/createRouter";
import { FeatureInputsFindUniqueSchema } from "../schemas/findUniqueFeatureInputs.schema";
import { FeatureInputsFindFirstSchema } from "../schemas/findFirstFeatureInputs.schema";
import { FeatureInputsFindManySchema } from "../schemas/findManyFeatureInputs.schema";
import { FeatureInputsCreateOneSchema } from "../schemas/createOneFeatureInputs.schema";
import { FeatureInputsCreateManySchema } from "../schemas/createManyFeatureInputs.schema";
import { FeatureInputsDeleteOneSchema } from "../schemas/deleteOneFeatureInputs.schema";
import { FeatureInputsUpdateOneSchema } from "../schemas/updateOneFeatureInputs.schema";
import { FeatureInputsDeleteManySchema } from "../schemas/deleteManyFeatureInputs.schema";
import { FeatureInputsUpdateManySchema } from "../schemas/updateManyFeatureInputs.schema";
import { FeatureInputsUpsertSchema } from "../schemas/upsertOneFeatureInputs.schema";
import { FeatureInputsAggregateSchema } from "../schemas/aggregateFeatureInputs.schema";
import { FeatureInputsGroupBySchema } from "../schemas/groupByFeatureInputs.schema";

export const featureinputsRouter = t.router({
  aggregateFeatureInputs: publicProcedure
    .input(FeatureInputsAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateFeatureInputs = await ctx.prisma.featureInputs.aggregate(input);
      return aggregateFeatureInputs;
    }),
  createManyFeatureInputs: publicProcedure
    .input(FeatureInputsCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyFeatureInputs = await ctx.prisma.featureInputs.createMany(input);
      return createManyFeatureInputs;
    }),
  createOneFeatureInputs: publicProcedure
    .input(FeatureInputsCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneFeatureInputs = await ctx.prisma.featureInputs.create(input);
      return createOneFeatureInputs;
    }),
  deleteManyFeatureInputs: publicProcedure
    .input(FeatureInputsDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyFeatureInputs = await ctx.prisma.featureInputs.deleteMany(input);
      return deleteManyFeatureInputs;
    }),
  deleteOneFeatureInputs: publicProcedure
    .input(FeatureInputsDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneFeatureInputs = await ctx.prisma.featureInputs.delete(input);
      return deleteOneFeatureInputs;
    }),
  findFirstFeatureInputs: publicProcedure
    .input(FeatureInputsFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstFeatureInputs = await ctx.prisma.featureInputs.findFirst(input);
      return findFirstFeatureInputs;
    }),
  findFirstFeatureInputsOrThrow: publicProcedure
    .input(FeatureInputsFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstFeatureInputsOrThrow = await ctx.prisma.featureInputs.findFirstOrThrow(input);
      return findFirstFeatureInputsOrThrow;
    }),
  findManyFeatureInputs: publicProcedure
    .input(FeatureInputsFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyFeatureInputs = await ctx.prisma.featureInputs.findMany(input);
      return findManyFeatureInputs;
    }),
  findUniqueFeatureInputs: publicProcedure
    .input(FeatureInputsFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueFeatureInputs = await ctx.prisma.featureInputs.findUnique(input);
      return findUniqueFeatureInputs;
    }),
  findUniqueFeatureInputsOrThrow: publicProcedure
    .input(FeatureInputsFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueFeatureInputsOrThrow = await ctx.prisma.featureInputs.findUniqueOrThrow(input);
      return findUniqueFeatureInputsOrThrow;
    }),
  groupByFeatureInputs: publicProcedure
    .input(FeatureInputsGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByFeatureInputs = await ctx.prisma.featureInputs.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByFeatureInputs;
    }),
  updateManyFeatureInputs: publicProcedure
    .input(FeatureInputsUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyFeatureInputs = await ctx.prisma.featureInputs.updateMany(input);
      return updateManyFeatureInputs;
    }),
  updateOneFeatureInputs: publicProcedure
    .input(FeatureInputsUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneFeatureInputs = await ctx.prisma.featureInputs.update(input);
      return updateOneFeatureInputs;
    }),
  upsertOneFeatureInputs: publicProcedure
    .input(FeatureInputsUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneFeatureInputs = await ctx.prisma.featureInputs.upsert(input);
      return upsertOneFeatureInputs;
    }),

})
