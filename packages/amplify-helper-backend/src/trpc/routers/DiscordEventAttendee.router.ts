import { t, publicProcedure } from "./helpers/createRouter";
import { DiscordEventAttendeeFindUniqueSchema } from "../schemas/findUniqueDiscordEventAttendee.schema";
import { DiscordEventAttendeeFindFirstSchema } from "../schemas/findFirstDiscordEventAttendee.schema";
import { DiscordEventAttendeeFindManySchema } from "../schemas/findManyDiscordEventAttendee.schema";
import { DiscordEventAttendeeCreateOneSchema } from "../schemas/createOneDiscordEventAttendee.schema";
import { DiscordEventAttendeeCreateManySchema } from "../schemas/createManyDiscordEventAttendee.schema";
import { DiscordEventAttendeeDeleteOneSchema } from "../schemas/deleteOneDiscordEventAttendee.schema";
import { DiscordEventAttendeeUpdateOneSchema } from "../schemas/updateOneDiscordEventAttendee.schema";
import { DiscordEventAttendeeDeleteManySchema } from "../schemas/deleteManyDiscordEventAttendee.schema";
import { DiscordEventAttendeeUpdateManySchema } from "../schemas/updateManyDiscordEventAttendee.schema";
import { DiscordEventAttendeeUpsertSchema } from "../schemas/upsertOneDiscordEventAttendee.schema";
import { DiscordEventAttendeeAggregateSchema } from "../schemas/aggregateDiscordEventAttendee.schema";
import { DiscordEventAttendeeGroupBySchema } from "../schemas/groupByDiscordEventAttendee.schema";

export const discordeventattendeesRouter = t.router({
  aggregateDiscordEventAttendee: publicProcedure
    .input(DiscordEventAttendeeAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateDiscordEventAttendee = await ctx.prisma.discordEventAttendee.aggregate(input);
      return aggregateDiscordEventAttendee;
    }),
  createManyDiscordEventAttendee: publicProcedure
    .input(DiscordEventAttendeeCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyDiscordEventAttendee = await ctx.prisma.discordEventAttendee.createMany(input);
      return createManyDiscordEventAttendee;
    }),
  createOneDiscordEventAttendee: publicProcedure
    .input(DiscordEventAttendeeCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneDiscordEventAttendee = await ctx.prisma.discordEventAttendee.create(input);
      return createOneDiscordEventAttendee;
    }),
  deleteManyDiscordEventAttendee: publicProcedure
    .input(DiscordEventAttendeeDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyDiscordEventAttendee = await ctx.prisma.discordEventAttendee.deleteMany(input);
      return deleteManyDiscordEventAttendee;
    }),
  deleteOneDiscordEventAttendee: publicProcedure
    .input(DiscordEventAttendeeDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneDiscordEventAttendee = await ctx.prisma.discordEventAttendee.delete(input);
      return deleteOneDiscordEventAttendee;
    }),
  findFirstDiscordEventAttendee: publicProcedure
    .input(DiscordEventAttendeeFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstDiscordEventAttendee = await ctx.prisma.discordEventAttendee.findFirst(input);
      return findFirstDiscordEventAttendee;
    }),
  findFirstDiscordEventAttendeeOrThrow: publicProcedure
    .input(DiscordEventAttendeeFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstDiscordEventAttendeeOrThrow = await ctx.prisma.discordEventAttendee.findFirstOrThrow(input);
      return findFirstDiscordEventAttendeeOrThrow;
    }),
  findManyDiscordEventAttendee: publicProcedure
    .input(DiscordEventAttendeeFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyDiscordEventAttendee = await ctx.prisma.discordEventAttendee.findMany(input);
      return findManyDiscordEventAttendee;
    }),
  findUniqueDiscordEventAttendee: publicProcedure
    .input(DiscordEventAttendeeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueDiscordEventAttendee = await ctx.prisma.discordEventAttendee.findUnique(input);
      return findUniqueDiscordEventAttendee;
    }),
  findUniqueDiscordEventAttendeeOrThrow: publicProcedure
    .input(DiscordEventAttendeeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueDiscordEventAttendeeOrThrow = await ctx.prisma.discordEventAttendee.findUniqueOrThrow(input);
      return findUniqueDiscordEventAttendeeOrThrow;
    }),
  groupByDiscordEventAttendee: publicProcedure
    .input(DiscordEventAttendeeGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByDiscordEventAttendee = await ctx.prisma.discordEventAttendee.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDiscordEventAttendee;
    }),
  updateManyDiscordEventAttendee: publicProcedure
    .input(DiscordEventAttendeeUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyDiscordEventAttendee = await ctx.prisma.discordEventAttendee.updateMany(input);
      return updateManyDiscordEventAttendee;
    }),
  updateOneDiscordEventAttendee: publicProcedure
    .input(DiscordEventAttendeeUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneDiscordEventAttendee = await ctx.prisma.discordEventAttendee.update(input);
      return updateOneDiscordEventAttendee;
    }),
  upsertOneDiscordEventAttendee: publicProcedure
    .input(DiscordEventAttendeeUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneDiscordEventAttendee = await ctx.prisma.discordEventAttendee.upsert(input);
      return upsertOneDiscordEventAttendee;
    }),

})
