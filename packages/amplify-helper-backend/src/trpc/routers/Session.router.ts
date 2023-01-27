import { t, publicProcedure } from "./helpers/createRouter";
import { SessionFindUniqueSchema } from "../schemas/findUniqueSession.schema";
import { SessionFindFirstSchema } from "../schemas/findFirstSession.schema";
import { SessionFindManySchema } from "../schemas/findManySession.schema";
import { SessionCreateOneSchema } from "../schemas/createOneSession.schema";
import { SessionCreateManySchema } from "../schemas/createManySession.schema";
import { SessionDeleteOneSchema } from "../schemas/deleteOneSession.schema";
import { SessionUpdateOneSchema } from "../schemas/updateOneSession.schema";
import { SessionDeleteManySchema } from "../schemas/deleteManySession.schema";
import { SessionUpdateManySchema } from "../schemas/updateManySession.schema";
import { SessionUpsertSchema } from "../schemas/upsertOneSession.schema";
import { SessionAggregateSchema } from "../schemas/aggregateSession.schema";
import { SessionGroupBySchema } from "../schemas/groupBySession.schema";

export const sessionsRouter = t.router({
  aggregateSession: publicProcedure
    .input(SessionAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateSession = await ctx.prisma.session.aggregate(input);
      return aggregateSession;
    }),
  createManySession: publicProcedure
    .input(SessionCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManySession = await ctx.prisma.session.createMany(input);
      return createManySession;
    }),
  createOneSession: publicProcedure
    .input(SessionCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneSession = await ctx.prisma.session.create(input);
      return createOneSession;
    }),
  deleteManySession: publicProcedure
    .input(SessionDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManySession = await ctx.prisma.session.deleteMany(input);
      return deleteManySession;
    }),
  deleteOneSession: publicProcedure
    .input(SessionDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneSession = await ctx.prisma.session.delete(input);
      return deleteOneSession;
    }),
  findFirstSession: publicProcedure
    .input(SessionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstSession = await ctx.prisma.session.findFirst(input);
      return findFirstSession;
    }),
  findFirstSessionOrThrow: publicProcedure
    .input(SessionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstSessionOrThrow = await ctx.prisma.session.findFirstOrThrow(input);
      return findFirstSessionOrThrow;
    }),
  findManySession: publicProcedure
    .input(SessionFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManySession = await ctx.prisma.session.findMany(input);
      return findManySession;
    }),
  findUniqueSession: publicProcedure
    .input(SessionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueSession = await ctx.prisma.session.findUnique(input);
      return findUniqueSession;
    }),
  findUniqueSessionOrThrow: publicProcedure
    .input(SessionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueSessionOrThrow = await ctx.prisma.session.findUniqueOrThrow(input);
      return findUniqueSessionOrThrow;
    }),
  groupBySession: publicProcedure
    .input(SessionGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupBySession = await ctx.prisma.session.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySession;
    }),
  updateManySession: publicProcedure
    .input(SessionUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManySession = await ctx.prisma.session.updateMany(input);
      return updateManySession;
    }),
  updateOneSession: publicProcedure
    .input(SessionUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneSession = await ctx.prisma.session.update(input);
      return updateOneSession;
    }),
  upsertOneSession: publicProcedure
    .input(SessionUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneSession = await ctx.prisma.session.upsert(input);
      return upsertOneSession;
    }),

})
