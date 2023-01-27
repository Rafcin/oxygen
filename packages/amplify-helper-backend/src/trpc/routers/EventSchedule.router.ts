import { t, publicProcedure } from "./helpers/createRouter";
import { EventScheduleFindUniqueSchema } from "../schemas/findUniqueEventSchedule.schema";
import { EventScheduleFindFirstSchema } from "../schemas/findFirstEventSchedule.schema";
import { EventScheduleFindManySchema } from "../schemas/findManyEventSchedule.schema";
import { EventScheduleCreateOneSchema } from "../schemas/createOneEventSchedule.schema";
import { EventScheduleCreateManySchema } from "../schemas/createManyEventSchedule.schema";
import { EventScheduleDeleteOneSchema } from "../schemas/deleteOneEventSchedule.schema";
import { EventScheduleUpdateOneSchema } from "../schemas/updateOneEventSchedule.schema";
import { EventScheduleDeleteManySchema } from "../schemas/deleteManyEventSchedule.schema";
import { EventScheduleUpdateManySchema } from "../schemas/updateManyEventSchedule.schema";
import { EventScheduleUpsertSchema } from "../schemas/upsertOneEventSchedule.schema";
import { EventScheduleAggregateSchema } from "../schemas/aggregateEventSchedule.schema";
import { EventScheduleGroupBySchema } from "../schemas/groupByEventSchedule.schema";

export const eventschedulesRouter = t.router({
  aggregateEventSchedule: publicProcedure
    .input(EventScheduleAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateEventSchedule = await ctx.prisma.eventSchedule.aggregate(input);
      return aggregateEventSchedule;
    }),
  createManyEventSchedule: publicProcedure
    .input(EventScheduleCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyEventSchedule = await ctx.prisma.eventSchedule.createMany(input);
      return createManyEventSchedule;
    }),
  createOneEventSchedule: publicProcedure
    .input(EventScheduleCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneEventSchedule = await ctx.prisma.eventSchedule.create(input);
      return createOneEventSchedule;
    }),
  deleteManyEventSchedule: publicProcedure
    .input(EventScheduleDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyEventSchedule = await ctx.prisma.eventSchedule.deleteMany(input);
      return deleteManyEventSchedule;
    }),
  deleteOneEventSchedule: publicProcedure
    .input(EventScheduleDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneEventSchedule = await ctx.prisma.eventSchedule.delete(input);
      return deleteOneEventSchedule;
    }),
  findFirstEventSchedule: publicProcedure
    .input(EventScheduleFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstEventSchedule = await ctx.prisma.eventSchedule.findFirst(input);
      return findFirstEventSchedule;
    }),
  findFirstEventScheduleOrThrow: publicProcedure
    .input(EventScheduleFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstEventScheduleOrThrow = await ctx.prisma.eventSchedule.findFirstOrThrow(input);
      return findFirstEventScheduleOrThrow;
    }),
  findManyEventSchedule: publicProcedure
    .input(EventScheduleFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyEventSchedule = await ctx.prisma.eventSchedule.findMany(input);
      return findManyEventSchedule;
    }),
  findUniqueEventSchedule: publicProcedure
    .input(EventScheduleFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueEventSchedule = await ctx.prisma.eventSchedule.findUnique(input);
      return findUniqueEventSchedule;
    }),
  findUniqueEventScheduleOrThrow: publicProcedure
    .input(EventScheduleFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueEventScheduleOrThrow = await ctx.prisma.eventSchedule.findUniqueOrThrow(input);
      return findUniqueEventScheduleOrThrow;
    }),
  groupByEventSchedule: publicProcedure
    .input(EventScheduleGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByEventSchedule = await ctx.prisma.eventSchedule.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEventSchedule;
    }),
  updateManyEventSchedule: publicProcedure
    .input(EventScheduleUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyEventSchedule = await ctx.prisma.eventSchedule.updateMany(input);
      return updateManyEventSchedule;
    }),
  updateOneEventSchedule: publicProcedure
    .input(EventScheduleUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneEventSchedule = await ctx.prisma.eventSchedule.update(input);
      return updateOneEventSchedule;
    }),
  upsertOneEventSchedule: publicProcedure
    .input(EventScheduleUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneEventSchedule = await ctx.prisma.eventSchedule.upsert(input);
      return upsertOneEventSchedule;
    }),

})
