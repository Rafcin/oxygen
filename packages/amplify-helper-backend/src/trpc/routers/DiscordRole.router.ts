import { t, publicProcedure } from "./helpers/createRouter";
import { DiscordRoleFindUniqueSchema } from "../schemas/findUniqueDiscordRole.schema";
import { DiscordRoleFindFirstSchema } from "../schemas/findFirstDiscordRole.schema";
import { DiscordRoleFindManySchema } from "../schemas/findManyDiscordRole.schema";
import { DiscordRoleCreateOneSchema } from "../schemas/createOneDiscordRole.schema";
import { DiscordRoleCreateManySchema } from "../schemas/createManyDiscordRole.schema";
import { DiscordRoleDeleteOneSchema } from "../schemas/deleteOneDiscordRole.schema";
import { DiscordRoleUpdateOneSchema } from "../schemas/updateOneDiscordRole.schema";
import { DiscordRoleDeleteManySchema } from "../schemas/deleteManyDiscordRole.schema";
import { DiscordRoleUpdateManySchema } from "../schemas/updateManyDiscordRole.schema";
import { DiscordRoleUpsertSchema } from "../schemas/upsertOneDiscordRole.schema";
import { DiscordRoleAggregateSchema } from "../schemas/aggregateDiscordRole.schema";
import { DiscordRoleGroupBySchema } from "../schemas/groupByDiscordRole.schema";

export const discordrolesRouter = t.router({
  aggregateDiscordRole: publicProcedure
    .input(DiscordRoleAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateDiscordRole = await ctx.prisma.discordRole.aggregate(input);
      return aggregateDiscordRole;
    }),
  createManyDiscordRole: publicProcedure
    .input(DiscordRoleCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyDiscordRole = await ctx.prisma.discordRole.createMany(input);
      return createManyDiscordRole;
    }),
  createOneDiscordRole: publicProcedure
    .input(DiscordRoleCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneDiscordRole = await ctx.prisma.discordRole.create(input);
      return createOneDiscordRole;
    }),
  deleteManyDiscordRole: publicProcedure
    .input(DiscordRoleDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyDiscordRole = await ctx.prisma.discordRole.deleteMany(input);
      return deleteManyDiscordRole;
    }),
  deleteOneDiscordRole: publicProcedure
    .input(DiscordRoleDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneDiscordRole = await ctx.prisma.discordRole.delete(input);
      return deleteOneDiscordRole;
    }),
  findFirstDiscordRole: publicProcedure
    .input(DiscordRoleFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstDiscordRole = await ctx.prisma.discordRole.findFirst(input);
      return findFirstDiscordRole;
    }),
  findFirstDiscordRoleOrThrow: publicProcedure
    .input(DiscordRoleFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstDiscordRoleOrThrow = await ctx.prisma.discordRole.findFirstOrThrow(input);
      return findFirstDiscordRoleOrThrow;
    }),
  findManyDiscordRole: publicProcedure
    .input(DiscordRoleFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyDiscordRole = await ctx.prisma.discordRole.findMany(input);
      return findManyDiscordRole;
    }),
  findUniqueDiscordRole: publicProcedure
    .input(DiscordRoleFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueDiscordRole = await ctx.prisma.discordRole.findUnique(input);
      return findUniqueDiscordRole;
    }),
  findUniqueDiscordRoleOrThrow: publicProcedure
    .input(DiscordRoleFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueDiscordRoleOrThrow = await ctx.prisma.discordRole.findUniqueOrThrow(input);
      return findUniqueDiscordRoleOrThrow;
    }),
  groupByDiscordRole: publicProcedure
    .input(DiscordRoleGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByDiscordRole = await ctx.prisma.discordRole.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDiscordRole;
    }),
  updateManyDiscordRole: publicProcedure
    .input(DiscordRoleUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyDiscordRole = await ctx.prisma.discordRole.updateMany(input);
      return updateManyDiscordRole;
    }),
  updateOneDiscordRole: publicProcedure
    .input(DiscordRoleUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneDiscordRole = await ctx.prisma.discordRole.update(input);
      return updateOneDiscordRole;
    }),
  upsertOneDiscordRole: publicProcedure
    .input(DiscordRoleUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneDiscordRole = await ctx.prisma.discordRole.upsert(input);
      return upsertOneDiscordRole;
    }),

})
