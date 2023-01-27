import { t, publicProcedure } from "./helpers/createRouter";
import { FeatureFindUniqueSchema } from "../schemas/findUniqueFeature.schema";
import { FeatureFindFirstSchema } from "../schemas/findFirstFeature.schema";
import { FeatureFindManySchema } from "../schemas/findManyFeature.schema";
import { FeatureCreateOneSchema } from "../schemas/createOneFeature.schema";
import { FeatureCreateManySchema } from "../schemas/createManyFeature.schema";
import { FeatureDeleteOneSchema } from "../schemas/deleteOneFeature.schema";
import { FeatureUpdateOneSchema } from "../schemas/updateOneFeature.schema";
import { FeatureDeleteManySchema } from "../schemas/deleteManyFeature.schema";
import { FeatureUpdateManySchema } from "../schemas/updateManyFeature.schema";
import { FeatureUpsertSchema } from "../schemas/upsertOneFeature.schema";
import { FeatureAggregateSchema } from "../schemas/aggregateFeature.schema";
import { FeatureGroupBySchema } from "../schemas/groupByFeature.schema";

export const featuresRouter = t.router({
  aggregateFeature: publicProcedure
    .input(FeatureAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateFeature = await ctx.prisma.feature.aggregate(input);
      return aggregateFeature;
    }),
  createManyFeature: publicProcedure
    .input(FeatureCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyFeature = await ctx.prisma.feature.createMany(input);
      return createManyFeature;
    }),
  createOneFeature: publicProcedure
    .input(FeatureCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneFeature = await ctx.prisma.feature.create(input);
      return createOneFeature;
    }),
  deleteManyFeature: publicProcedure
    .input(FeatureDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyFeature = await ctx.prisma.feature.deleteMany(input);
      return deleteManyFeature;
    }),
  deleteOneFeature: publicProcedure
    .input(FeatureDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneFeature = await ctx.prisma.feature.delete(input);
      return deleteOneFeature;
    }),
  findFirstFeature: publicProcedure
    .input(FeatureFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstFeature = await ctx.prisma.feature.findFirst(input);
      return findFirstFeature;
    }),
  findFirstFeatureOrThrow: publicProcedure
    .input(FeatureFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstFeatureOrThrow = await ctx.prisma.feature.findFirstOrThrow(input);
      return findFirstFeatureOrThrow;
    }),
  findManyFeature: publicProcedure
    .input(FeatureFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyFeature = await ctx.prisma.feature.findMany(input);
      return findManyFeature;
    }),
  findUniqueFeature: publicProcedure
    .input(FeatureFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueFeature = await ctx.prisma.feature.findUnique(input);
      return findUniqueFeature;
    }),
  findUniqueFeatureOrThrow: publicProcedure
    .input(FeatureFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueFeatureOrThrow = await ctx.prisma.feature.findUniqueOrThrow(input);
      return findUniqueFeatureOrThrow;
    }),
  groupByFeature: publicProcedure
    .input(FeatureGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByFeature = await ctx.prisma.feature.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByFeature;
    }),
  updateManyFeature: publicProcedure
    .input(FeatureUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyFeature = await ctx.prisma.feature.updateMany(input);
      return updateManyFeature;
    }),
  updateOneFeature: publicProcedure
    .input(FeatureUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneFeature = await ctx.prisma.feature.update(input);
      return updateOneFeature;
    }),
  upsertOneFeature: publicProcedure
    .input(FeatureUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneFeature = await ctx.prisma.feature.upsert(input);
      return upsertOneFeature;
    }),

})
