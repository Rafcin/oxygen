import { t, publicProcedure } from "./helpers/createRouter";
import { ConfigurationFindUniqueSchema } from "../schemas/findUniqueConfiguration.schema";
import { ConfigurationFindFirstSchema } from "../schemas/findFirstConfiguration.schema";
import { ConfigurationFindManySchema } from "../schemas/findManyConfiguration.schema";
import { ConfigurationCreateOneSchema } from "../schemas/createOneConfiguration.schema";
import { ConfigurationCreateManySchema } from "../schemas/createManyConfiguration.schema";
import { ConfigurationDeleteOneSchema } from "../schemas/deleteOneConfiguration.schema";
import { ConfigurationUpdateOneSchema } from "../schemas/updateOneConfiguration.schema";
import { ConfigurationDeleteManySchema } from "../schemas/deleteManyConfiguration.schema";
import { ConfigurationUpdateManySchema } from "../schemas/updateManyConfiguration.schema";
import { ConfigurationUpsertSchema } from "../schemas/upsertOneConfiguration.schema";
import { ConfigurationAggregateSchema } from "../schemas/aggregateConfiguration.schema";
import { ConfigurationGroupBySchema } from "../schemas/groupByConfiguration.schema";

export const configurationsRouter = t.router({
  aggregateConfiguration: publicProcedure
    .input(ConfigurationAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateConfiguration = await ctx.prisma.configuration.aggregate(input);
      return aggregateConfiguration;
    }),
  createManyConfiguration: publicProcedure
    .input(ConfigurationCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyConfiguration = await ctx.prisma.configuration.createMany(input);
      return createManyConfiguration;
    }),
  createOneConfiguration: publicProcedure
    .input(ConfigurationCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneConfiguration = await ctx.prisma.configuration.create(input);
      return createOneConfiguration;
    }),
  deleteManyConfiguration: publicProcedure
    .input(ConfigurationDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyConfiguration = await ctx.prisma.configuration.deleteMany(input);
      return deleteManyConfiguration;
    }),
  deleteOneConfiguration: publicProcedure
    .input(ConfigurationDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneConfiguration = await ctx.prisma.configuration.delete(input);
      return deleteOneConfiguration;
    }),
  findFirstConfiguration: publicProcedure
    .input(ConfigurationFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstConfiguration = await ctx.prisma.configuration.findFirst(input);
      return findFirstConfiguration;
    }),
  findFirstConfigurationOrThrow: publicProcedure
    .input(ConfigurationFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstConfigurationOrThrow = await ctx.prisma.configuration.findFirstOrThrow(input);
      return findFirstConfigurationOrThrow;
    }),
  findManyConfiguration: publicProcedure
    .input(ConfigurationFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyConfiguration = await ctx.prisma.configuration.findMany(input);
      return findManyConfiguration;
    }),
  findUniqueConfiguration: publicProcedure
    .input(ConfigurationFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueConfiguration = await ctx.prisma.configuration.findUnique(input);
      return findUniqueConfiguration;
    }),
  findUniqueConfigurationOrThrow: publicProcedure
    .input(ConfigurationFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueConfigurationOrThrow = await ctx.prisma.configuration.findUniqueOrThrow(input);
      return findUniqueConfigurationOrThrow;
    }),
  groupByConfiguration: publicProcedure
    .input(ConfigurationGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByConfiguration = await ctx.prisma.configuration.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByConfiguration;
    }),
  updateManyConfiguration: publicProcedure
    .input(ConfigurationUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyConfiguration = await ctx.prisma.configuration.updateMany(input);
      return updateManyConfiguration;
    }),
  updateOneConfiguration: publicProcedure
    .input(ConfigurationUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneConfiguration = await ctx.prisma.configuration.update(input);
      return updateOneConfiguration;
    }),
  upsertOneConfiguration: publicProcedure
    .input(ConfigurationUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneConfiguration = await ctx.prisma.configuration.upsert(input);
      return upsertOneConfiguration;
    }),

})
