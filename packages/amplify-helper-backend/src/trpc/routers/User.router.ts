import { t, publicProcedure } from "./helpers/createRouter";
import { UserFindUniqueSchema } from "../schemas/findUniqueUser.schema";
import { UserFindFirstSchema } from "../schemas/findFirstUser.schema";
import { UserFindManySchema } from "../schemas/findManyUser.schema";
import { UserCreateOneSchema } from "../schemas/createOneUser.schema";
import { UserCreateManySchema } from "../schemas/createManyUser.schema";
import { UserDeleteOneSchema } from "../schemas/deleteOneUser.schema";
import { UserUpdateOneSchema } from "../schemas/updateOneUser.schema";
import { UserDeleteManySchema } from "../schemas/deleteManyUser.schema";
import { UserUpdateManySchema } from "../schemas/updateManyUser.schema";
import { UserUpsertSchema } from "../schemas/upsertOneUser.schema";
import { UserAggregateSchema } from "../schemas/aggregateUser.schema";
import { UserGroupBySchema } from "../schemas/groupByUser.schema";

export const usersRouter = t.router({
  aggregateUser: publicProcedure
    .input(UserAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateUser = await ctx.prisma.user.aggregate(input);
      return aggregateUser;
    }),
  createManyUser: publicProcedure
    .input(UserCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyUser = await ctx.prisma.user.createMany(input);
      return createManyUser;
    }),
  createOneUser: publicProcedure
    .input(UserCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneUser = await ctx.prisma.user.create(input);
      return createOneUser;
    }),
  deleteManyUser: publicProcedure
    .input(UserDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyUser = await ctx.prisma.user.deleteMany(input);
      return deleteManyUser;
    }),
  deleteOneUser: publicProcedure
    .input(UserDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneUser = await ctx.prisma.user.delete(input);
      return deleteOneUser;
    }),
  findFirstUser: publicProcedure
    .input(UserFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstUser = await ctx.prisma.user.findFirst(input);
      return findFirstUser;
    }),
  findFirstUserOrThrow: publicProcedure
    .input(UserFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstUserOrThrow = await ctx.prisma.user.findFirstOrThrow(input);
      return findFirstUserOrThrow;
    }),
  findManyUser: publicProcedure
    .input(UserFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyUser = await ctx.prisma.user.findMany(input);
      return findManyUser;
    }),
  findUniqueUser: publicProcedure
    .input(UserFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueUser = await ctx.prisma.user.findUnique(input);
      return findUniqueUser;
    }),
  findUniqueUserOrThrow: publicProcedure
    .input(UserFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueUserOrThrow = await ctx.prisma.user.findUniqueOrThrow(input);
      return findUniqueUserOrThrow;
    }),
  groupByUser: publicProcedure
    .input(UserGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByUser = await ctx.prisma.user.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByUser;
    }),
  updateManyUser: publicProcedure
    .input(UserUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyUser = await ctx.prisma.user.updateMany(input);
      return updateManyUser;
    }),
  updateOneUser: publicProcedure
    .input(UserUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneUser = await ctx.prisma.user.update(input);
      return updateOneUser;
    }),
  upsertOneUser: publicProcedure
    .input(UserUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneUser = await ctx.prisma.user.upsert(input);
      return upsertOneUser;
    }),

})
