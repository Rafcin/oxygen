import { t, publicProcedure } from "./helpers/createRouter";
import { AnswerFindUniqueSchema } from "../schemas/findUniqueAnswer.schema";
import { AnswerFindFirstSchema } from "../schemas/findFirstAnswer.schema";
import { AnswerFindManySchema } from "../schemas/findManyAnswer.schema";
import { AnswerCreateOneSchema } from "../schemas/createOneAnswer.schema";
import { AnswerCreateManySchema } from "../schemas/createManyAnswer.schema";
import { AnswerDeleteOneSchema } from "../schemas/deleteOneAnswer.schema";
import { AnswerUpdateOneSchema } from "../schemas/updateOneAnswer.schema";
import { AnswerDeleteManySchema } from "../schemas/deleteManyAnswer.schema";
import { AnswerUpdateManySchema } from "../schemas/updateManyAnswer.schema";
import { AnswerUpsertSchema } from "../schemas/upsertOneAnswer.schema";
import { AnswerAggregateSchema } from "../schemas/aggregateAnswer.schema";
import { AnswerGroupBySchema } from "../schemas/groupByAnswer.schema";

export const answersRouter = t.router({
  aggregateAnswer: publicProcedure
    .input(AnswerAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateAnswer = await ctx.prisma.answer.aggregate(input);
      return aggregateAnswer;
    }),
  createManyAnswer: publicProcedure
    .input(AnswerCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyAnswer = await ctx.prisma.answer.createMany(input);
      return createManyAnswer;
    }),
  createOneAnswer: publicProcedure
    .input(AnswerCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneAnswer = await ctx.prisma.answer.create(input);
      return createOneAnswer;
    }),
  deleteManyAnswer: publicProcedure
    .input(AnswerDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyAnswer = await ctx.prisma.answer.deleteMany(input);
      return deleteManyAnswer;
    }),
  deleteOneAnswer: publicProcedure
    .input(AnswerDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneAnswer = await ctx.prisma.answer.delete(input);
      return deleteOneAnswer;
    }),
  findFirstAnswer: publicProcedure
    .input(AnswerFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstAnswer = await ctx.prisma.answer.findFirst(input);
      return findFirstAnswer;
    }),
  findFirstAnswerOrThrow: publicProcedure
    .input(AnswerFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstAnswerOrThrow = await ctx.prisma.answer.findFirstOrThrow(input);
      return findFirstAnswerOrThrow;
    }),
  findManyAnswer: publicProcedure
    .input(AnswerFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyAnswer = await ctx.prisma.answer.findMany(input);
      return findManyAnswer;
    }),
  findUniqueAnswer: publicProcedure
    .input(AnswerFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueAnswer = await ctx.prisma.answer.findUnique(input);
      return findUniqueAnswer;
    }),
  findUniqueAnswerOrThrow: publicProcedure
    .input(AnswerFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueAnswerOrThrow = await ctx.prisma.answer.findUniqueOrThrow(input);
      return findUniqueAnswerOrThrow;
    }),
  groupByAnswer: publicProcedure
    .input(AnswerGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByAnswer = await ctx.prisma.answer.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAnswer;
    }),
  updateManyAnswer: publicProcedure
    .input(AnswerUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyAnswer = await ctx.prisma.answer.updateMany(input);
      return updateManyAnswer;
    }),
  updateOneAnswer: publicProcedure
    .input(AnswerUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneAnswer = await ctx.prisma.answer.update(input);
      return updateOneAnswer;
    }),
  upsertOneAnswer: publicProcedure
    .input(AnswerUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneAnswer = await ctx.prisma.answer.upsert(input);
      return upsertOneAnswer;
    }),

})
