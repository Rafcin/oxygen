import { t, shieldedProcedure } from "./helpers/createRouter";
import { ChannelFindUniqueSchema } from "../schemas/findUniqueChannel.schema";
import { ChannelFindFirstSchema } from "../schemas/findFirstChannel.schema";
import { ChannelFindManySchema } from "../schemas/findManyChannel.schema";
import { ChannelCreateOneSchema } from "../schemas/createOneChannel.schema";
import { ChannelCreateManySchema } from "../schemas/createManyChannel.schema";
import { ChannelDeleteOneSchema } from "../schemas/deleteOneChannel.schema";
import { ChannelUpdateOneSchema } from "../schemas/updateOneChannel.schema";
import { ChannelDeleteManySchema } from "../schemas/deleteManyChannel.schema";
import { ChannelUpdateManySchema } from "../schemas/updateManyChannel.schema";
import { ChannelUpsertSchema } from "../schemas/upsertOneChannel.schema";
import { ChannelAggregateSchema } from "../schemas/aggregateChannel.schema";
import { ChannelGroupBySchema } from "../schemas/groupByChannel.schema";
import { ChannelFindRawObjectSchema } from "../schemas/objects/ChannelFindRaw.schema";
import { ChannelAggregateRawObjectSchema } from "../schemas/objects/ChannelAggregateRaw.schema";

export const channelsRouter = t.router({
  aggregateChannel: shieldedProcedure
    .input(ChannelAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateChannel = await ctx.prisma.channel.aggregate(input);
      return aggregateChannel;
    }),
  aggregateChannelRaw: shieldedProcedure
    .input(ChannelAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateChannelRaw = await ctx.prisma.channel.aggregateRaw(input);
      return aggregateChannelRaw;
    }),
  createManyChannel: shieldedProcedure
    .input(ChannelCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyChannel = await ctx.prisma.channel.createMany(input);
      return createManyChannel;
    }),
  createOneChannel: shieldedProcedure
    .input(ChannelCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneChannel = await ctx.prisma.channel.create(input);
      return createOneChannel;
    }),
  deleteManyChannel: shieldedProcedure
    .input(ChannelDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyChannel = await ctx.prisma.channel.deleteMany(input);
      return deleteManyChannel;
    }),
  deleteOneChannel: shieldedProcedure
    .input(ChannelDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneChannel = await ctx.prisma.channel.delete(input);
      return deleteOneChannel;
    }),
  findFirstChannel: shieldedProcedure
    .input(ChannelFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstChannel = await ctx.prisma.channel.findFirst(input);
      return findFirstChannel;
    }),
  findFirstChannelOrThrow: shieldedProcedure
    .input(ChannelFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstChannelOrThrow = await ctx.prisma.channel.findFirstOrThrow(input);
      return findFirstChannelOrThrow;
    }),
  findManyChannel: shieldedProcedure
    .input(ChannelFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyChannel = await ctx.prisma.channel.findMany(input);
      return findManyChannel;
    }),
  findChannelRaw: shieldedProcedure
    .input(ChannelFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findChannelRaw = await ctx.prisma.channel.findRaw(input);
      return findChannelRaw;
    }),
  findUniqueChannel: shieldedProcedure
    .input(ChannelFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueChannel = await ctx.prisma.channel.findUnique(input);
      return findUniqueChannel;
    }),
  findUniqueChannelOrThrow: shieldedProcedure
    .input(ChannelFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueChannelOrThrow = await ctx.prisma.channel.findUniqueOrThrow(input);
      return findUniqueChannelOrThrow;
    }),
  groupByChannel: shieldedProcedure
    .input(ChannelGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByChannel = await ctx.prisma.channel.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByChannel;
    }),
  updateManyChannel: shieldedProcedure
    .input(ChannelUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyChannel = await ctx.prisma.channel.updateMany(input);
      return updateManyChannel;
    }),
  updateOneChannel: shieldedProcedure
    .input(ChannelUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneChannel = await ctx.prisma.channel.update(input);
      return updateOneChannel;
    }),
  upsertOneChannel: shieldedProcedure
    .input(ChannelUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneChannel = await ctx.prisma.channel.upsert(input);
      return upsertOneChannel;
    }),

})
