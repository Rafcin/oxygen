import { t, publicProcedure } from "./helpers/createRouter";
import { AccessLevelFindUniqueSchema } from "../schemas/findUniqueAccessLevel.schema";
import { AccessLevelFindFirstSchema } from "../schemas/findFirstAccessLevel.schema";
import { AccessLevelFindManySchema } from "../schemas/findManyAccessLevel.schema";
import { AccessLevelCreateOneSchema } from "../schemas/createOneAccessLevel.schema";
import { AccessLevelCreateManySchema } from "../schemas/createManyAccessLevel.schema";
import { AccessLevelDeleteOneSchema } from "../schemas/deleteOneAccessLevel.schema";
import { AccessLevelUpdateOneSchema } from "../schemas/updateOneAccessLevel.schema";
import { AccessLevelDeleteManySchema } from "../schemas/deleteManyAccessLevel.schema";
import { AccessLevelUpdateManySchema } from "../schemas/updateManyAccessLevel.schema";
import { AccessLevelUpsertSchema } from "../schemas/upsertOneAccessLevel.schema";
import { AccessLevelAggregateSchema } from "../schemas/aggregateAccessLevel.schema";
import { AccessLevelGroupBySchema } from "../schemas/groupByAccessLevel.schema";

export const accesslevelsRouter = t.router({
  aggregateAccessLevel: publicProcedure
    .input(AccessLevelAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateAccessLevel = await ctx.prisma.accessLevel.aggregate(input);
      return aggregateAccessLevel;
    }),
  createManyAccessLevel: publicProcedure
    .input(AccessLevelCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyAccessLevel = await ctx.prisma.accessLevel.createMany(input);
      return createManyAccessLevel;
    }),
  createOneAccessLevel: publicProcedure
    .input(AccessLevelCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneAccessLevel = await ctx.prisma.accessLevel.create(input);
      return createOneAccessLevel;
    }),
  deleteManyAccessLevel: publicProcedure
    .input(AccessLevelDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyAccessLevel = await ctx.prisma.accessLevel.deleteMany(input);
      return deleteManyAccessLevel;
    }),
  deleteOneAccessLevel: publicProcedure
    .input(AccessLevelDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneAccessLevel = await ctx.prisma.accessLevel.delete(input);
      return deleteOneAccessLevel;
    }),
  findFirstAccessLevel: publicProcedure
    .input(AccessLevelFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstAccessLevel = await ctx.prisma.accessLevel.findFirst(input);
      return findFirstAccessLevel;
    }),
  findFirstAccessLevelOrThrow: publicProcedure
    .input(AccessLevelFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstAccessLevelOrThrow = await ctx.prisma.accessLevel.findFirstOrThrow(input);
      return findFirstAccessLevelOrThrow;
    }),
  findManyAccessLevel: publicProcedure
    .input(AccessLevelFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyAccessLevel = await ctx.prisma.accessLevel.findMany(input);
      return findManyAccessLevel;
    }),
  findUniqueAccessLevel: publicProcedure
    .input(AccessLevelFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueAccessLevel = await ctx.prisma.accessLevel.findUnique(input);
      return findUniqueAccessLevel;
    }),
  findUniqueAccessLevelOrThrow: publicProcedure
    .input(AccessLevelFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueAccessLevelOrThrow = await ctx.prisma.accessLevel.findUniqueOrThrow(input);
      return findUniqueAccessLevelOrThrow;
    }),
  groupByAccessLevel: publicProcedure
    .input(AccessLevelGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByAccessLevel = await ctx.prisma.accessLevel.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAccessLevel;
    }),
  updateManyAccessLevel: publicProcedure
    .input(AccessLevelUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyAccessLevel = await ctx.prisma.accessLevel.updateMany(input);
      return updateManyAccessLevel;
    }),
  updateOneAccessLevel: publicProcedure
    .input(AccessLevelUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneAccessLevel = await ctx.prisma.accessLevel.update(input);
      return updateOneAccessLevel;
    }),
  upsertOneAccessLevel: publicProcedure
    .input(AccessLevelUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneAccessLevel = await ctx.prisma.accessLevel.upsert(input);
      return upsertOneAccessLevel;
    }),

})
