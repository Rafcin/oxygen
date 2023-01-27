import { t, publicProcedure } from "./helpers/createRouter";
import { FeatureTypeFindUniqueSchema } from "../schemas/findUniqueFeatureType.schema";
import { FeatureTypeFindFirstSchema } from "../schemas/findFirstFeatureType.schema";
import { FeatureTypeFindManySchema } from "../schemas/findManyFeatureType.schema";
import { FeatureTypeCreateOneSchema } from "../schemas/createOneFeatureType.schema";
import { FeatureTypeCreateManySchema } from "../schemas/createManyFeatureType.schema";
import { FeatureTypeDeleteOneSchema } from "../schemas/deleteOneFeatureType.schema";
import { FeatureTypeUpdateOneSchema } from "../schemas/updateOneFeatureType.schema";
import { FeatureTypeDeleteManySchema } from "../schemas/deleteManyFeatureType.schema";
import { FeatureTypeUpdateManySchema } from "../schemas/updateManyFeatureType.schema";
import { FeatureTypeUpsertSchema } from "../schemas/upsertOneFeatureType.schema";
import { FeatureTypeAggregateSchema } from "../schemas/aggregateFeatureType.schema";
import { FeatureTypeGroupBySchema } from "../schemas/groupByFeatureType.schema";

export const featuretypesRouter = t.router({
  aggregateFeatureType: publicProcedure
    .input(FeatureTypeAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateFeatureType = await ctx.prisma.featureType.aggregate(input);
      return aggregateFeatureType;
    }),
  createManyFeatureType: publicProcedure
    .input(FeatureTypeCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyFeatureType = await ctx.prisma.featureType.createMany(input);
      return createManyFeatureType;
    }),
  createOneFeatureType: publicProcedure
    .input(FeatureTypeCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneFeatureType = await ctx.prisma.featureType.create(input);
      return createOneFeatureType;
    }),
  deleteManyFeatureType: publicProcedure
    .input(FeatureTypeDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyFeatureType = await ctx.prisma.featureType.deleteMany(input);
      return deleteManyFeatureType;
    }),
  deleteOneFeatureType: publicProcedure
    .input(FeatureTypeDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneFeatureType = await ctx.prisma.featureType.delete(input);
      return deleteOneFeatureType;
    }),
  findFirstFeatureType: publicProcedure
    .input(FeatureTypeFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstFeatureType = await ctx.prisma.featureType.findFirst(input);
      return findFirstFeatureType;
    }),
  findFirstFeatureTypeOrThrow: publicProcedure
    .input(FeatureTypeFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstFeatureTypeOrThrow = await ctx.prisma.featureType.findFirstOrThrow(input);
      return findFirstFeatureTypeOrThrow;
    }),
  findManyFeatureType: publicProcedure
    .input(FeatureTypeFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyFeatureType = await ctx.prisma.featureType.findMany(input);
      return findManyFeatureType;
    }),
  findUniqueFeatureType: publicProcedure
    .input(FeatureTypeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueFeatureType = await ctx.prisma.featureType.findUnique(input);
      return findUniqueFeatureType;
    }),
  findUniqueFeatureTypeOrThrow: publicProcedure
    .input(FeatureTypeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueFeatureTypeOrThrow = await ctx.prisma.featureType.findUniqueOrThrow(input);
      return findUniqueFeatureTypeOrThrow;
    }),
  groupByFeatureType: publicProcedure
    .input(FeatureTypeGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByFeatureType = await ctx.prisma.featureType.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByFeatureType;
    }),
  updateManyFeatureType: publicProcedure
    .input(FeatureTypeUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyFeatureType = await ctx.prisma.featureType.updateMany(input);
      return updateManyFeatureType;
    }),
  updateOneFeatureType: publicProcedure
    .input(FeatureTypeUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneFeatureType = await ctx.prisma.featureType.update(input);
      return updateOneFeatureType;
    }),
  upsertOneFeatureType: publicProcedure
    .input(FeatureTypeUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneFeatureType = await ctx.prisma.featureType.upsert(input);
      return upsertOneFeatureType;
    }),

})
