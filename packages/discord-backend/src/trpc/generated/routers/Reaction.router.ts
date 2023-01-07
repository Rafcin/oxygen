import { t, shieldedProcedure } from "./helpers/createRouter";
import { ReactionFindUniqueSchema } from "../schemas/findUniqueReaction.schema";
import { ReactionFindFirstSchema } from "../schemas/findFirstReaction.schema";
import { ReactionFindManySchema } from "../schemas/findManyReaction.schema";
import { ReactionCreateOneSchema } from "../schemas/createOneReaction.schema";
import { ReactionCreateManySchema } from "../schemas/createManyReaction.schema";
import { ReactionDeleteOneSchema } from "../schemas/deleteOneReaction.schema";
import { ReactionUpdateOneSchema } from "../schemas/updateOneReaction.schema";
import { ReactionDeleteManySchema } from "../schemas/deleteManyReaction.schema";
import { ReactionUpdateManySchema } from "../schemas/updateManyReaction.schema";
import { ReactionUpsertSchema } from "../schemas/upsertOneReaction.schema";
import { ReactionAggregateSchema } from "../schemas/aggregateReaction.schema";
import { ReactionGroupBySchema } from "../schemas/groupByReaction.schema";
import { ReactionFindRawObjectSchema } from "../schemas/objects/ReactionFindRaw.schema";
import { ReactionAggregateRawObjectSchema } from "../schemas/objects/ReactionAggregateRaw.schema";

export const reactionsRouter = t.router({
  aggregateReaction: shieldedProcedure
    .input(ReactionAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateReaction = await ctx.prisma.reaction.aggregate(input);
      return aggregateReaction;
    }),
  aggregateReactionRaw: shieldedProcedure
    .input(ReactionAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateReactionRaw = await ctx.prisma.reaction.aggregateRaw(input);
      return aggregateReactionRaw;
    }),
  createManyReaction: shieldedProcedure
    .input(ReactionCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyReaction = await ctx.prisma.reaction.createMany(input);
      return createManyReaction;
    }),
  createOneReaction: shieldedProcedure
    .input(ReactionCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneReaction = await ctx.prisma.reaction.create(input);
      return createOneReaction;
    }),
  deleteManyReaction: shieldedProcedure
    .input(ReactionDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyReaction = await ctx.prisma.reaction.deleteMany(input);
      return deleteManyReaction;
    }),
  deleteOneReaction: shieldedProcedure
    .input(ReactionDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneReaction = await ctx.prisma.reaction.delete(input);
      return deleteOneReaction;
    }),
  findFirstReaction: shieldedProcedure
    .input(ReactionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstReaction = await ctx.prisma.reaction.findFirst(input);
      return findFirstReaction;
    }),
  findFirstReactionOrThrow: shieldedProcedure
    .input(ReactionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstReactionOrThrow = await ctx.prisma.reaction.findFirstOrThrow(input);
      return findFirstReactionOrThrow;
    }),
  findManyReaction: shieldedProcedure
    .input(ReactionFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyReaction = await ctx.prisma.reaction.findMany(input);
      return findManyReaction;
    }),
  findReactionRaw: shieldedProcedure
    .input(ReactionFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findReactionRaw = await ctx.prisma.reaction.findRaw(input);
      return findReactionRaw;
    }),
  findUniqueReaction: shieldedProcedure
    .input(ReactionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueReaction = await ctx.prisma.reaction.findUnique(input);
      return findUniqueReaction;
    }),
  findUniqueReactionOrThrow: shieldedProcedure
    .input(ReactionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueReactionOrThrow = await ctx.prisma.reaction.findUniqueOrThrow(input);
      return findUniqueReactionOrThrow;
    }),
  groupByReaction: shieldedProcedure
    .input(ReactionGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByReaction = await ctx.prisma.reaction.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByReaction;
    }),
  updateManyReaction: shieldedProcedure
    .input(ReactionUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyReaction = await ctx.prisma.reaction.updateMany(input);
      return updateManyReaction;
    }),
  updateOneReaction: shieldedProcedure
    .input(ReactionUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneReaction = await ctx.prisma.reaction.update(input);
      return updateOneReaction;
    }),
  upsertOneReaction: shieldedProcedure
    .input(ReactionUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneReaction = await ctx.prisma.reaction.upsert(input);
      return upsertOneReaction;
    }),

})
