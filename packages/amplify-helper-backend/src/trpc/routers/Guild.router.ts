import { t, publicProcedure } from "./helpers/createRouter";
import { GuildFindUniqueSchema } from "../schemas/findUniqueGuild.schema";
import { GuildFindFirstSchema } from "../schemas/findFirstGuild.schema";
import { GuildFindManySchema } from "../schemas/findManyGuild.schema";
import { GuildCreateOneSchema } from "../schemas/createOneGuild.schema";
import { GuildCreateManySchema } from "../schemas/createManyGuild.schema";
import { GuildDeleteOneSchema } from "../schemas/deleteOneGuild.schema";
import { GuildUpdateOneSchema } from "../schemas/updateOneGuild.schema";
import { GuildDeleteManySchema } from "../schemas/deleteManyGuild.schema";
import { GuildUpdateManySchema } from "../schemas/updateManyGuild.schema";
import { GuildUpsertSchema } from "../schemas/upsertOneGuild.schema";
import { GuildAggregateSchema } from "../schemas/aggregateGuild.schema";
import { GuildGroupBySchema } from "../schemas/groupByGuild.schema";

export const guildsRouter = t.router({
  aggregateGuild: publicProcedure
    .input(GuildAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateGuild = await ctx.prisma.guild.aggregate(input);
      return aggregateGuild;
    }),
  createManyGuild: publicProcedure
    .input(GuildCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyGuild = await ctx.prisma.guild.createMany(input);
      return createManyGuild;
    }),
  createOneGuild: publicProcedure
    .input(GuildCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneGuild = await ctx.prisma.guild.create(input);
      return createOneGuild;
    }),
  deleteManyGuild: publicProcedure
    .input(GuildDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyGuild = await ctx.prisma.guild.deleteMany(input);
      return deleteManyGuild;
    }),
  deleteOneGuild: publicProcedure
    .input(GuildDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneGuild = await ctx.prisma.guild.delete(input);
      return deleteOneGuild;
    }),
  findFirstGuild: publicProcedure
    .input(GuildFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstGuild = await ctx.prisma.guild.findFirst(input);
      return findFirstGuild;
    }),
  findFirstGuildOrThrow: publicProcedure
    .input(GuildFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstGuildOrThrow = await ctx.prisma.guild.findFirstOrThrow(input);
      return findFirstGuildOrThrow;
    }),
  findManyGuild: publicProcedure
    .input(GuildFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyGuild = await ctx.prisma.guild.findMany(input);
      return findManyGuild;
    }),
  findUniqueGuild: publicProcedure
    .input(GuildFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueGuild = await ctx.prisma.guild.findUnique(input);
      return findUniqueGuild;
    }),
  findUniqueGuildOrThrow: publicProcedure
    .input(GuildFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueGuildOrThrow = await ctx.prisma.guild.findUniqueOrThrow(input);
      return findUniqueGuildOrThrow;
    }),
  groupByGuild: publicProcedure
    .input(GuildGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByGuild = await ctx.prisma.guild.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByGuild;
    }),
  updateManyGuild: publicProcedure
    .input(GuildUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyGuild = await ctx.prisma.guild.updateMany(input);
      return updateManyGuild;
    }),
  updateOneGuild: publicProcedure
    .input(GuildUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneGuild = await ctx.prisma.guild.update(input);
      return updateOneGuild;
    }),
  upsertOneGuild: publicProcedure
    .input(GuildUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneGuild = await ctx.prisma.guild.upsert(input);
      return upsertOneGuild;
    }),

})
