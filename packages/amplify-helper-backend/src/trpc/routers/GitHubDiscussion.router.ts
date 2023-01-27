import { t, publicProcedure } from "./helpers/createRouter";
import { GitHubDiscussionFindUniqueSchema } from "../schemas/findUniqueGitHubDiscussion.schema";
import { GitHubDiscussionFindFirstSchema } from "../schemas/findFirstGitHubDiscussion.schema";
import { GitHubDiscussionFindManySchema } from "../schemas/findManyGitHubDiscussion.schema";
import { GitHubDiscussionCreateOneSchema } from "../schemas/createOneGitHubDiscussion.schema";
import { GitHubDiscussionCreateManySchema } from "../schemas/createManyGitHubDiscussion.schema";
import { GitHubDiscussionDeleteOneSchema } from "../schemas/deleteOneGitHubDiscussion.schema";
import { GitHubDiscussionUpdateOneSchema } from "../schemas/updateOneGitHubDiscussion.schema";
import { GitHubDiscussionDeleteManySchema } from "../schemas/deleteManyGitHubDiscussion.schema";
import { GitHubDiscussionUpdateManySchema } from "../schemas/updateManyGitHubDiscussion.schema";
import { GitHubDiscussionUpsertSchema } from "../schemas/upsertOneGitHubDiscussion.schema";
import { GitHubDiscussionAggregateSchema } from "../schemas/aggregateGitHubDiscussion.schema";
import { GitHubDiscussionGroupBySchema } from "../schemas/groupByGitHubDiscussion.schema";

export const githubdiscussionsRouter = t.router({
  aggregateGitHubDiscussion: publicProcedure
    .input(GitHubDiscussionAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateGitHubDiscussion = await ctx.prisma.gitHubDiscussion.aggregate(input);
      return aggregateGitHubDiscussion;
    }),
  createManyGitHubDiscussion: publicProcedure
    .input(GitHubDiscussionCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyGitHubDiscussion = await ctx.prisma.gitHubDiscussion.createMany(input);
      return createManyGitHubDiscussion;
    }),
  createOneGitHubDiscussion: publicProcedure
    .input(GitHubDiscussionCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneGitHubDiscussion = await ctx.prisma.gitHubDiscussion.create(input);
      return createOneGitHubDiscussion;
    }),
  deleteManyGitHubDiscussion: publicProcedure
    .input(GitHubDiscussionDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyGitHubDiscussion = await ctx.prisma.gitHubDiscussion.deleteMany(input);
      return deleteManyGitHubDiscussion;
    }),
  deleteOneGitHubDiscussion: publicProcedure
    .input(GitHubDiscussionDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneGitHubDiscussion = await ctx.prisma.gitHubDiscussion.delete(input);
      return deleteOneGitHubDiscussion;
    }),
  findFirstGitHubDiscussion: publicProcedure
    .input(GitHubDiscussionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstGitHubDiscussion = await ctx.prisma.gitHubDiscussion.findFirst(input);
      return findFirstGitHubDiscussion;
    }),
  findFirstGitHubDiscussionOrThrow: publicProcedure
    .input(GitHubDiscussionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstGitHubDiscussionOrThrow = await ctx.prisma.gitHubDiscussion.findFirstOrThrow(input);
      return findFirstGitHubDiscussionOrThrow;
    }),
  findManyGitHubDiscussion: publicProcedure
    .input(GitHubDiscussionFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyGitHubDiscussion = await ctx.prisma.gitHubDiscussion.findMany(input);
      return findManyGitHubDiscussion;
    }),
  findUniqueGitHubDiscussion: publicProcedure
    .input(GitHubDiscussionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueGitHubDiscussion = await ctx.prisma.gitHubDiscussion.findUnique(input);
      return findUniqueGitHubDiscussion;
    }),
  findUniqueGitHubDiscussionOrThrow: publicProcedure
    .input(GitHubDiscussionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueGitHubDiscussionOrThrow = await ctx.prisma.gitHubDiscussion.findUniqueOrThrow(input);
      return findUniqueGitHubDiscussionOrThrow;
    }),
  groupByGitHubDiscussion: publicProcedure
    .input(GitHubDiscussionGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByGitHubDiscussion = await ctx.prisma.gitHubDiscussion.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByGitHubDiscussion;
    }),
  updateManyGitHubDiscussion: publicProcedure
    .input(GitHubDiscussionUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyGitHubDiscussion = await ctx.prisma.gitHubDiscussion.updateMany(input);
      return updateManyGitHubDiscussion;
    }),
  updateOneGitHubDiscussion: publicProcedure
    .input(GitHubDiscussionUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneGitHubDiscussion = await ctx.prisma.gitHubDiscussion.update(input);
      return updateOneGitHubDiscussion;
    }),
  upsertOneGitHubDiscussion: publicProcedure
    .input(GitHubDiscussionUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneGitHubDiscussion = await ctx.prisma.gitHubDiscussion.upsert(input);
      return upsertOneGitHubDiscussion;
    }),

})
