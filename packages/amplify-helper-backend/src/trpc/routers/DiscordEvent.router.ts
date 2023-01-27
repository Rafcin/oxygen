import { t, publicProcedure } from "./helpers/createRouter";
import { DiscordEventFindUniqueSchema } from "../schemas/findUniqueDiscordEvent.schema";
import { DiscordEventFindFirstSchema } from "../schemas/findFirstDiscordEvent.schema";
import { DiscordEventFindManySchema } from "../schemas/findManyDiscordEvent.schema";
import { DiscordEventCreateOneSchema } from "../schemas/createOneDiscordEvent.schema";
import { DiscordEventCreateManySchema } from "../schemas/createManyDiscordEvent.schema";
import { DiscordEventDeleteOneSchema } from "../schemas/deleteOneDiscordEvent.schema";
import { DiscordEventUpdateOneSchema } from "../schemas/updateOneDiscordEvent.schema";
import { DiscordEventDeleteManySchema } from "../schemas/deleteManyDiscordEvent.schema";
import { DiscordEventUpdateManySchema } from "../schemas/updateManyDiscordEvent.schema";
import { DiscordEventUpsertSchema } from "../schemas/upsertOneDiscordEvent.schema";
import { DiscordEventAggregateSchema } from "../schemas/aggregateDiscordEvent.schema";
import { DiscordEventGroupBySchema } from "../schemas/groupByDiscordEvent.schema";

export const discordeventsRouter = t.router({
  aggregateDiscordEvent: publicProcedure
    .input(DiscordEventAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateDiscordEvent = await ctx.prisma.discordEvent.aggregate(input);
      return aggregateDiscordEvent;
    }),
  createManyDiscordEvent: publicProcedure
    .input(DiscordEventCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyDiscordEvent = await ctx.prisma.discordEvent.createMany(input);
      return createManyDiscordEvent;
    }),
  createOneDiscordEvent: publicProcedure
    .input(DiscordEventCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneDiscordEvent = await ctx.prisma.discordEvent.create(input);
      return createOneDiscordEvent;
    }),
  deleteManyDiscordEvent: publicProcedure
    .input(DiscordEventDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyDiscordEvent = await ctx.prisma.discordEvent.deleteMany(input);
      return deleteManyDiscordEvent;
    }),
  deleteOneDiscordEvent: publicProcedure
    .input(DiscordEventDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneDiscordEvent = await ctx.prisma.discordEvent.delete(input);
      return deleteOneDiscordEvent;
    }),
  findFirstDiscordEvent: publicProcedure
    .input(DiscordEventFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstDiscordEvent = await ctx.prisma.discordEvent.findFirst(input);
      return findFirstDiscordEvent;
    }),
  findFirstDiscordEventOrThrow: publicProcedure
    .input(DiscordEventFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstDiscordEventOrThrow = await ctx.prisma.discordEvent.findFirstOrThrow(input);
      return findFirstDiscordEventOrThrow;
    }),
  findManyDiscordEvent: publicProcedure
    .input(DiscordEventFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyDiscordEvent = await ctx.prisma.discordEvent.findMany(input);
      return findManyDiscordEvent;
    }),
  findUniqueDiscordEvent: publicProcedure
    .input(DiscordEventFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueDiscordEvent = await ctx.prisma.discordEvent.findUnique(input);
      return findUniqueDiscordEvent;
    }),
  findUniqueDiscordEventOrThrow: publicProcedure
    .input(DiscordEventFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueDiscordEventOrThrow = await ctx.prisma.discordEvent.findUniqueOrThrow(input);
      return findUniqueDiscordEventOrThrow;
    }),
  groupByDiscordEvent: publicProcedure
    .input(DiscordEventGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByDiscordEvent = await ctx.prisma.discordEvent.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDiscordEvent;
    }),
  updateManyDiscordEvent: publicProcedure
    .input(DiscordEventUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyDiscordEvent = await ctx.prisma.discordEvent.updateMany(input);
      return updateManyDiscordEvent;
    }),
  updateOneDiscordEvent: publicProcedure
    .input(DiscordEventUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneDiscordEvent = await ctx.prisma.discordEvent.update(input);
      return updateOneDiscordEvent;
    }),
  upsertOneDiscordEvent: publicProcedure
    .input(DiscordEventUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneDiscordEvent = await ctx.prisma.discordEvent.upsert(input);
      return upsertOneDiscordEvent;
    }),

})
