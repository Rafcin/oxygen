import { t, publicProcedure } from "./helpers/createRouter";
import { QuestionTagFindUniqueSchema } from "../schemas/findUniqueQuestionTag.schema";
import { QuestionTagFindFirstSchema } from "../schemas/findFirstQuestionTag.schema";
import { QuestionTagFindManySchema } from "../schemas/findManyQuestionTag.schema";
import { QuestionTagCreateOneSchema } from "../schemas/createOneQuestionTag.schema";
import { QuestionTagCreateManySchema } from "../schemas/createManyQuestionTag.schema";
import { QuestionTagDeleteOneSchema } from "../schemas/deleteOneQuestionTag.schema";
import { QuestionTagUpdateOneSchema } from "../schemas/updateOneQuestionTag.schema";
import { QuestionTagDeleteManySchema } from "../schemas/deleteManyQuestionTag.schema";
import { QuestionTagUpdateManySchema } from "../schemas/updateManyQuestionTag.schema";
import { QuestionTagUpsertSchema } from "../schemas/upsertOneQuestionTag.schema";
import { QuestionTagAggregateSchema } from "../schemas/aggregateQuestionTag.schema";
import { QuestionTagGroupBySchema } from "../schemas/groupByQuestionTag.schema";

export const questiontagsRouter = t.router({
  aggregateQuestionTag: publicProcedure
    .input(QuestionTagAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateQuestionTag = await ctx.prisma.questionTag.aggregate(input);
      return aggregateQuestionTag;
    }),
  createManyQuestionTag: publicProcedure
    .input(QuestionTagCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyQuestionTag = await ctx.prisma.questionTag.createMany(input);
      return createManyQuestionTag;
    }),
  createOneQuestionTag: publicProcedure
    .input(QuestionTagCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneQuestionTag = await ctx.prisma.questionTag.create(input);
      return createOneQuestionTag;
    }),
  deleteManyQuestionTag: publicProcedure
    .input(QuestionTagDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyQuestionTag = await ctx.prisma.questionTag.deleteMany(input);
      return deleteManyQuestionTag;
    }),
  deleteOneQuestionTag: publicProcedure
    .input(QuestionTagDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneQuestionTag = await ctx.prisma.questionTag.delete(input);
      return deleteOneQuestionTag;
    }),
  findFirstQuestionTag: publicProcedure
    .input(QuestionTagFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstQuestionTag = await ctx.prisma.questionTag.findFirst(input);
      return findFirstQuestionTag;
    }),
  findFirstQuestionTagOrThrow: publicProcedure
    .input(QuestionTagFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstQuestionTagOrThrow = await ctx.prisma.questionTag.findFirstOrThrow(input);
      return findFirstQuestionTagOrThrow;
    }),
  findManyQuestionTag: publicProcedure
    .input(QuestionTagFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyQuestionTag = await ctx.prisma.questionTag.findMany(input);
      return findManyQuestionTag;
    }),
  findUniqueQuestionTag: publicProcedure
    .input(QuestionTagFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueQuestionTag = await ctx.prisma.questionTag.findUnique(input);
      return findUniqueQuestionTag;
    }),
  findUniqueQuestionTagOrThrow: publicProcedure
    .input(QuestionTagFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueQuestionTagOrThrow = await ctx.prisma.questionTag.findUniqueOrThrow(input);
      return findUniqueQuestionTagOrThrow;
    }),
  groupByQuestionTag: publicProcedure
    .input(QuestionTagGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByQuestionTag = await ctx.prisma.questionTag.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByQuestionTag;
    }),
  updateManyQuestionTag: publicProcedure
    .input(QuestionTagUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyQuestionTag = await ctx.prisma.questionTag.updateMany(input);
      return updateManyQuestionTag;
    }),
  updateOneQuestionTag: publicProcedure
    .input(QuestionTagUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneQuestionTag = await ctx.prisma.questionTag.update(input);
      return updateOneQuestionTag;
    }),
  upsertOneQuestionTag: publicProcedure
    .input(QuestionTagUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneQuestionTag = await ctx.prisma.questionTag.upsert(input);
      return upsertOneQuestionTag;
    }),

})
