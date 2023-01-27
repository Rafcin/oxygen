import { t, publicProcedure } from "./helpers/createRouter";
import { AccessLevelRoleFindUniqueSchema } from "../schemas/findUniqueAccessLevelRole.schema";
import { AccessLevelRoleFindFirstSchema } from "../schemas/findFirstAccessLevelRole.schema";
import { AccessLevelRoleFindManySchema } from "../schemas/findManyAccessLevelRole.schema";
import { AccessLevelRoleCreateOneSchema } from "../schemas/createOneAccessLevelRole.schema";
import { AccessLevelRoleCreateManySchema } from "../schemas/createManyAccessLevelRole.schema";
import { AccessLevelRoleDeleteOneSchema } from "../schemas/deleteOneAccessLevelRole.schema";
import { AccessLevelRoleUpdateOneSchema } from "../schemas/updateOneAccessLevelRole.schema";
import { AccessLevelRoleDeleteManySchema } from "../schemas/deleteManyAccessLevelRole.schema";
import { AccessLevelRoleUpdateManySchema } from "../schemas/updateManyAccessLevelRole.schema";
import { AccessLevelRoleUpsertSchema } from "../schemas/upsertOneAccessLevelRole.schema";
import { AccessLevelRoleAggregateSchema } from "../schemas/aggregateAccessLevelRole.schema";
import { AccessLevelRoleGroupBySchema } from "../schemas/groupByAccessLevelRole.schema";

export const accesslevelrolesRouter = t.router({
  aggregateAccessLevelRole: publicProcedure
    .input(AccessLevelRoleAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateAccessLevelRole = await ctx.prisma.accessLevelRole.aggregate(input);
      return aggregateAccessLevelRole;
    }),
  createManyAccessLevelRole: publicProcedure
    .input(AccessLevelRoleCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyAccessLevelRole = await ctx.prisma.accessLevelRole.createMany(input);
      return createManyAccessLevelRole;
    }),
  createOneAccessLevelRole: publicProcedure
    .input(AccessLevelRoleCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneAccessLevelRole = await ctx.prisma.accessLevelRole.create(input);
      return createOneAccessLevelRole;
    }),
  deleteManyAccessLevelRole: publicProcedure
    .input(AccessLevelRoleDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyAccessLevelRole = await ctx.prisma.accessLevelRole.deleteMany(input);
      return deleteManyAccessLevelRole;
    }),
  deleteOneAccessLevelRole: publicProcedure
    .input(AccessLevelRoleDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneAccessLevelRole = await ctx.prisma.accessLevelRole.delete(input);
      return deleteOneAccessLevelRole;
    }),
  findFirstAccessLevelRole: publicProcedure
    .input(AccessLevelRoleFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstAccessLevelRole = await ctx.prisma.accessLevelRole.findFirst(input);
      return findFirstAccessLevelRole;
    }),
  findFirstAccessLevelRoleOrThrow: publicProcedure
    .input(AccessLevelRoleFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstAccessLevelRoleOrThrow = await ctx.prisma.accessLevelRole.findFirstOrThrow(input);
      return findFirstAccessLevelRoleOrThrow;
    }),
  findManyAccessLevelRole: publicProcedure
    .input(AccessLevelRoleFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyAccessLevelRole = await ctx.prisma.accessLevelRole.findMany(input);
      return findManyAccessLevelRole;
    }),
  findUniqueAccessLevelRole: publicProcedure
    .input(AccessLevelRoleFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueAccessLevelRole = await ctx.prisma.accessLevelRole.findUnique(input);
      return findUniqueAccessLevelRole;
    }),
  findUniqueAccessLevelRoleOrThrow: publicProcedure
    .input(AccessLevelRoleFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueAccessLevelRoleOrThrow = await ctx.prisma.accessLevelRole.findUniqueOrThrow(input);
      return findUniqueAccessLevelRoleOrThrow;
    }),
  groupByAccessLevelRole: publicProcedure
    .input(AccessLevelRoleGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByAccessLevelRole = await ctx.prisma.accessLevelRole.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAccessLevelRole;
    }),
  updateManyAccessLevelRole: publicProcedure
    .input(AccessLevelRoleUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyAccessLevelRole = await ctx.prisma.accessLevelRole.updateMany(input);
      return updateManyAccessLevelRole;
    }),
  updateOneAccessLevelRole: publicProcedure
    .input(AccessLevelRoleUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneAccessLevelRole = await ctx.prisma.accessLevelRole.update(input);
      return updateOneAccessLevelRole;
    }),
  upsertOneAccessLevelRole: publicProcedure
    .input(AccessLevelRoleUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneAccessLevelRole = await ctx.prisma.accessLevelRole.upsert(input);
      return upsertOneAccessLevelRole;
    }),

})
