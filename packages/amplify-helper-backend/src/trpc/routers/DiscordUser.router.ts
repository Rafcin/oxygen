import { t, publicProcedure } from "./helpers/createRouter";
import { DiscordUserFindUniqueSchema } from "../schemas/findUniqueDiscordUser.schema";
import { DiscordUserFindFirstSchema } from "../schemas/findFirstDiscordUser.schema";
import { DiscordUserFindManySchema } from "../schemas/findManyDiscordUser.schema";
import { DiscordUserCreateOneSchema } from "../schemas/createOneDiscordUser.schema";
import { DiscordUserCreateManySchema } from "../schemas/createManyDiscordUser.schema";
import { DiscordUserDeleteOneSchema } from "../schemas/deleteOneDiscordUser.schema";
import { DiscordUserUpdateOneSchema } from "../schemas/updateOneDiscordUser.schema";
import { DiscordUserDeleteManySchema } from "../schemas/deleteManyDiscordUser.schema";
import { DiscordUserUpdateManySchema } from "../schemas/updateManyDiscordUser.schema";
import { DiscordUserUpsertSchema } from "../schemas/upsertOneDiscordUser.schema";
import { DiscordUserAggregateSchema } from "../schemas/aggregateDiscordUser.schema";
import { DiscordUserGroupBySchema } from "../schemas/groupByDiscordUser.schema";

export const discordusersRouter = t.router({
  aggregateDiscordUser: publicProcedure
    .input(DiscordUserAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateDiscordUser = await ctx.prisma.discordUser.aggregate(input);
      return aggregateDiscordUser;
    }),
  createManyDiscordUser: publicProcedure
    .input(DiscordUserCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyDiscordUser = await ctx.prisma.discordUser.createMany(input);
      return createManyDiscordUser;
    }),
  createOneDiscordUser: publicProcedure
    .input(DiscordUserCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneDiscordUser = await ctx.prisma.discordUser.create(input);
      return createOneDiscordUser;
    }),
  deleteManyDiscordUser: publicProcedure
    .input(DiscordUserDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyDiscordUser = await ctx.prisma.discordUser.deleteMany(input);
      return deleteManyDiscordUser;
    }),
  deleteOneDiscordUser: publicProcedure
    .input(DiscordUserDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneDiscordUser = await ctx.prisma.discordUser.delete(input);
      return deleteOneDiscordUser;
    }),
  findFirstDiscordUser: publicProcedure
    .input(DiscordUserFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstDiscordUser = await ctx.prisma.discordUser.findFirst(input);
      return findFirstDiscordUser;
    }),
  findFirstDiscordUserOrThrow: publicProcedure
    .input(DiscordUserFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstDiscordUserOrThrow = await ctx.prisma.discordUser.findFirstOrThrow(input);
      return findFirstDiscordUserOrThrow;
    }),
  findManyDiscordUser: publicProcedure
    .input(DiscordUserFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyDiscordUser = await ctx.prisma.discordUser.findMany(input);
      return findManyDiscordUser;
    }),
  findUniqueDiscordUser: publicProcedure
    .input(DiscordUserFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueDiscordUser = await ctx.prisma.discordUser.findUnique(input);
      return findUniqueDiscordUser;
    }),
  findUniqueDiscordUserOrThrow: publicProcedure
    .input(DiscordUserFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueDiscordUserOrThrow = await ctx.prisma.discordUser.findUniqueOrThrow(input);
      return findUniqueDiscordUserOrThrow;
    }),
  groupByDiscordUser: publicProcedure
    .input(DiscordUserGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByDiscordUser = await ctx.prisma.discordUser.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDiscordUser;
    }),
  updateManyDiscordUser: publicProcedure
    .input(DiscordUserUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyDiscordUser = await ctx.prisma.discordUser.updateMany(input);
      return updateManyDiscordUser;
    }),
  updateOneDiscordUser: publicProcedure
    .input(DiscordUserUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneDiscordUser = await ctx.prisma.discordUser.update(input);
      return updateOneDiscordUser;
    }),
  upsertOneDiscordUser: publicProcedure
    .input(DiscordUserUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneDiscordUser = await ctx.prisma.discordUser.upsert(input);
      return upsertOneDiscordUser;
    }),

})
