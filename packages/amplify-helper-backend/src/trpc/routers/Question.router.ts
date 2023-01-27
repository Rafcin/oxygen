import { t, publicProcedure } from "./helpers/createRouter";
import { QuestionFindUniqueSchema } from "../schemas/findUniqueQuestion.schema";
import { QuestionFindFirstSchema } from "../schemas/findFirstQuestion.schema";
import { QuestionFindManySchema } from "../schemas/findManyQuestion.schema";
import { QuestionCreateOneSchema } from "../schemas/createOneQuestion.schema";
import { QuestionCreateManySchema } from "../schemas/createManyQuestion.schema";
import { QuestionDeleteOneSchema } from "../schemas/deleteOneQuestion.schema";
import { QuestionUpdateOneSchema } from "../schemas/updateOneQuestion.schema";
import { QuestionDeleteManySchema } from "../schemas/deleteManyQuestion.schema";
import { QuestionUpdateManySchema } from "../schemas/updateManyQuestion.schema";
import { QuestionUpsertSchema } from "../schemas/upsertOneQuestion.schema";
import { QuestionAggregateSchema } from "../schemas/aggregateQuestion.schema";
import { QuestionGroupBySchema } from "../schemas/groupByQuestion.schema";

export const questionsRouter = t.router({
  aggregateQuestion: publicProcedure
    .input(QuestionAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateQuestion = await ctx.prisma.question.aggregate(input);
      return aggregateQuestion;
    }),
  createManyQuestion: publicProcedure
    .input(QuestionCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyQuestion = await ctx.prisma.question.createMany(input);
      return createManyQuestion;
    }),
  createOneQuestion: publicProcedure
    .input(QuestionCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneQuestion = await ctx.prisma.question.create(input);
      return createOneQuestion;
    }),
  deleteManyQuestion: publicProcedure
    .input(QuestionDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyQuestion = await ctx.prisma.question.deleteMany(input);
      return deleteManyQuestion;
    }),
  deleteOneQuestion: publicProcedure
    .input(QuestionDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneQuestion = await ctx.prisma.question.delete(input);
      return deleteOneQuestion;
    }),
  findFirstQuestion: publicProcedure
    .input(QuestionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstQuestion = await ctx.prisma.question.findFirst(input);
      return findFirstQuestion;
    }),
  findFirstQuestionOrThrow: publicProcedure
    .input(QuestionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstQuestionOrThrow = await ctx.prisma.question.findFirstOrThrow(input);
      return findFirstQuestionOrThrow;
    }),
  findManyQuestion: publicProcedure
    .input(QuestionFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyQuestion = await ctx.prisma.question.findMany(input);
      return findManyQuestion;
    }),
  findUniqueQuestion: publicProcedure
    .input(QuestionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueQuestion = await ctx.prisma.question.findUnique(input);
      return findUniqueQuestion;
    }),
  findUniqueQuestionOrThrow: publicProcedure
    .input(QuestionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueQuestionOrThrow = await ctx.prisma.question.findUniqueOrThrow(input);
      return findUniqueQuestionOrThrow;
    }),
  groupByQuestion: publicProcedure
    .input(QuestionGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByQuestion = await ctx.prisma.question.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByQuestion;
    }),
  updateManyQuestion: publicProcedure
    .input(QuestionUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyQuestion = await ctx.prisma.question.updateMany(input);
      return updateManyQuestion;
    }),
  updateOneQuestion: publicProcedure
    .input(QuestionUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneQuestion = await ctx.prisma.question.update(input);
      return updateOneQuestion;
    }),
  upsertOneQuestion: publicProcedure
    .input(QuestionUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneQuestion = await ctx.prisma.question.upsert(input);
      return upsertOneQuestion;
    }),

})
