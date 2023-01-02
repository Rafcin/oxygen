import { t, shieldedProcedure } from "./helpers/createRouter";
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
import { GuildFindRawObjectSchema } from "../schemas/objects/GuildFindRaw.schema";
import { GuildAggregateRawObjectSchema } from "../schemas/objects/GuildAggregateRaw.schema";

export const guildsRouter = t.router({
  aggregateGuild: shieldedProcedure
    .input(GuildAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateGuild = await ctx.prisma.guild.aggregate(input);
      return aggregateGuild;
    }),
  aggregateGuildRaw: shieldedProcedure
    .input(GuildAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateGuildRaw = await ctx.prisma.guild.aggregateRaw(input);
      return aggregateGuildRaw;
    }),
  createManyGuild: shieldedProcedure
    .input(GuildCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyGuild = await ctx.prisma.guild.createMany(input);
      return createManyGuild;
    }),
  createOneGuild: shieldedProcedure
    .input(GuildCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneGuild = await ctx.prisma.guild.create(input);
      return createOneGuild;
    }),
  deleteManyGuild: shieldedProcedure
    .input(GuildDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyGuild = await ctx.prisma.guild.deleteMany(input);
      return deleteManyGuild;
    }),
  deleteOneGuild: shieldedProcedure
    .input(GuildDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneGuild = await ctx.prisma.guild.delete(input);
      return deleteOneGuild;
    }),
  findFirstGuild: shieldedProcedure
    .input(GuildFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstGuild = await ctx.prisma.guild.findFirst(input);
      return findFirstGuild;
    }),
  findFirstGuildOrThrow: shieldedProcedure
    .input(GuildFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstGuildOrThrow = await ctx.prisma.guild.findFirstOrThrow(input);
      return findFirstGuildOrThrow;
    }),
  findManyGuild: shieldedProcedure
    .input(GuildFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyGuild = await ctx.prisma.guild.findMany(input);
      return findManyGuild;
    }),
  findGuildRaw: shieldedProcedure
    .input(GuildFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findGuildRaw = await ctx.prisma.guild.findRaw(input);
      return findGuildRaw;
    }),
  findUniqueGuild: shieldedProcedure
    .input(GuildFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueGuild = await ctx.prisma.guild.findUnique(input);
      return findUniqueGuild;
    }),
  findUniqueGuildOrThrow: shieldedProcedure
    .input(GuildFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueGuildOrThrow = await ctx.prisma.guild.findUniqueOrThrow(input);
      return findUniqueGuildOrThrow;
    }),
  groupByGuild: shieldedProcedure
    .input(GuildGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByGuild = await ctx.prisma.guild.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByGuild;
    }),
  updateManyGuild: shieldedProcedure
    .input(GuildUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyGuild = await ctx.prisma.guild.updateMany(input);
      return updateManyGuild;
    }),
  updateOneGuild: shieldedProcedure
    .input(GuildUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneGuild = await ctx.prisma.guild.update(input);
      return updateOneGuild;
    }),
  upsertOneGuild: shieldedProcedure
    .input(GuildUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneGuild = await ctx.prisma.guild.upsert(input);
      return upsertOneGuild;
    }),

})
