import { t, publicProcedure } from "./helpers/createRouter";
import { ConfigurationFeatureFindUniqueSchema } from "../schemas/findUniqueConfigurationFeature.schema";
import { ConfigurationFeatureFindFirstSchema } from "../schemas/findFirstConfigurationFeature.schema";
import { ConfigurationFeatureFindManySchema } from "../schemas/findManyConfigurationFeature.schema";
import { ConfigurationFeatureCreateOneSchema } from "../schemas/createOneConfigurationFeature.schema";
import { ConfigurationFeatureCreateManySchema } from "../schemas/createManyConfigurationFeature.schema";
import { ConfigurationFeatureDeleteOneSchema } from "../schemas/deleteOneConfigurationFeature.schema";
import { ConfigurationFeatureUpdateOneSchema } from "../schemas/updateOneConfigurationFeature.schema";
import { ConfigurationFeatureDeleteManySchema } from "../schemas/deleteManyConfigurationFeature.schema";
import { ConfigurationFeatureUpdateManySchema } from "../schemas/updateManyConfigurationFeature.schema";
import { ConfigurationFeatureUpsertSchema } from "../schemas/upsertOneConfigurationFeature.schema";
import { ConfigurationFeatureAggregateSchema } from "../schemas/aggregateConfigurationFeature.schema";
import { ConfigurationFeatureGroupBySchema } from "../schemas/groupByConfigurationFeature.schema";

export const configurationfeaturesRouter = t.router({
  aggregateConfigurationFeature: publicProcedure
    .input(ConfigurationFeatureAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateConfigurationFeature = await ctx.prisma.configurationFeature.aggregate(input);
      return aggregateConfigurationFeature;
    }),
  createManyConfigurationFeature: publicProcedure
    .input(ConfigurationFeatureCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyConfigurationFeature = await ctx.prisma.configurationFeature.createMany(input);
      return createManyConfigurationFeature;
    }),
  createOneConfigurationFeature: publicProcedure
    .input(ConfigurationFeatureCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneConfigurationFeature = await ctx.prisma.configurationFeature.create(input);
      return createOneConfigurationFeature;
    }),
  deleteManyConfigurationFeature: publicProcedure
    .input(ConfigurationFeatureDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyConfigurationFeature = await ctx.prisma.configurationFeature.deleteMany(input);
      return deleteManyConfigurationFeature;
    }),
  deleteOneConfigurationFeature: publicProcedure
    .input(ConfigurationFeatureDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneConfigurationFeature = await ctx.prisma.configurationFeature.delete(input);
      return deleteOneConfigurationFeature;
    }),
  findFirstConfigurationFeature: publicProcedure
    .input(ConfigurationFeatureFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstConfigurationFeature = await ctx.prisma.configurationFeature.findFirst(input);
      return findFirstConfigurationFeature;
    }),
  findFirstConfigurationFeatureOrThrow: publicProcedure
    .input(ConfigurationFeatureFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstConfigurationFeatureOrThrow = await ctx.prisma.configurationFeature.findFirstOrThrow(input);
      return findFirstConfigurationFeatureOrThrow;
    }),
  findManyConfigurationFeature: publicProcedure
    .input(ConfigurationFeatureFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyConfigurationFeature = await ctx.prisma.configurationFeature.findMany(input);
      return findManyConfigurationFeature;
    }),
  findUniqueConfigurationFeature: publicProcedure
    .input(ConfigurationFeatureFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueConfigurationFeature = await ctx.prisma.configurationFeature.findUnique(input);
      return findUniqueConfigurationFeature;
    }),
  findUniqueConfigurationFeatureOrThrow: publicProcedure
    .input(ConfigurationFeatureFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueConfigurationFeatureOrThrow = await ctx.prisma.configurationFeature.findUniqueOrThrow(input);
      return findUniqueConfigurationFeatureOrThrow;
    }),
  groupByConfigurationFeature: publicProcedure
    .input(ConfigurationFeatureGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByConfigurationFeature = await ctx.prisma.configurationFeature.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByConfigurationFeature;
    }),
  updateManyConfigurationFeature: publicProcedure
    .input(ConfigurationFeatureUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyConfigurationFeature = await ctx.prisma.configurationFeature.updateMany(input);
      return updateManyConfigurationFeature;
    }),
  updateOneConfigurationFeature: publicProcedure
    .input(ConfigurationFeatureUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneConfigurationFeature = await ctx.prisma.configurationFeature.update(input);
      return updateOneConfigurationFeature;
    }),
  upsertOneConfigurationFeature: publicProcedure
    .input(ConfigurationFeatureUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneConfigurationFeature = await ctx.prisma.configurationFeature.upsert(input);
      return upsertOneConfigurationFeature;
    }),

})
