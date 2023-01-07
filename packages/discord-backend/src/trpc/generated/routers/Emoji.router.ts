import { t, shieldedProcedure } from "./helpers/createRouter";
import { EmojiFindUniqueSchema } from "../schemas/findUniqueEmoji.schema";
import { EmojiFindFirstSchema } from "../schemas/findFirstEmoji.schema";
import { EmojiFindManySchema } from "../schemas/findManyEmoji.schema";
import { EmojiCreateOneSchema } from "../schemas/createOneEmoji.schema";
import { EmojiCreateManySchema } from "../schemas/createManyEmoji.schema";
import { EmojiDeleteOneSchema } from "../schemas/deleteOneEmoji.schema";
import { EmojiUpdateOneSchema } from "../schemas/updateOneEmoji.schema";
import { EmojiDeleteManySchema } from "../schemas/deleteManyEmoji.schema";
import { EmojiUpdateManySchema } from "../schemas/updateManyEmoji.schema";
import { EmojiUpsertSchema } from "../schemas/upsertOneEmoji.schema";
import { EmojiAggregateSchema } from "../schemas/aggregateEmoji.schema";
import { EmojiGroupBySchema } from "../schemas/groupByEmoji.schema";
import { EmojiFindRawObjectSchema } from "../schemas/objects/EmojiFindRaw.schema";
import { EmojiAggregateRawObjectSchema } from "../schemas/objects/EmojiAggregateRaw.schema";

export const emojisRouter = t.router({
  aggregateEmoji: shieldedProcedure
    .input(EmojiAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateEmoji = await ctx.prisma.emoji.aggregate(input);
      return aggregateEmoji;
    }),
  aggregateEmojiRaw: shieldedProcedure
    .input(EmojiAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateEmojiRaw = await ctx.prisma.emoji.aggregateRaw(input);
      return aggregateEmojiRaw;
    }),
  createManyEmoji: shieldedProcedure
    .input(EmojiCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyEmoji = await ctx.prisma.emoji.createMany(input);
      return createManyEmoji;
    }),
  createOneEmoji: shieldedProcedure
    .input(EmojiCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneEmoji = await ctx.prisma.emoji.create(input);
      return createOneEmoji;
    }),
  deleteManyEmoji: shieldedProcedure
    .input(EmojiDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyEmoji = await ctx.prisma.emoji.deleteMany(input);
      return deleteManyEmoji;
    }),
  deleteOneEmoji: shieldedProcedure
    .input(EmojiDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneEmoji = await ctx.prisma.emoji.delete(input);
      return deleteOneEmoji;
    }),
  findFirstEmoji: shieldedProcedure
    .input(EmojiFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstEmoji = await ctx.prisma.emoji.findFirst(input);
      return findFirstEmoji;
    }),
  findFirstEmojiOrThrow: shieldedProcedure
    .input(EmojiFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstEmojiOrThrow = await ctx.prisma.emoji.findFirstOrThrow(input);
      return findFirstEmojiOrThrow;
    }),
  findManyEmoji: shieldedProcedure
    .input(EmojiFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyEmoji = await ctx.prisma.emoji.findMany(input);
      return findManyEmoji;
    }),
  findEmojiRaw: shieldedProcedure
    .input(EmojiFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findEmojiRaw = await ctx.prisma.emoji.findRaw(input);
      return findEmojiRaw;
    }),
  findUniqueEmoji: shieldedProcedure
    .input(EmojiFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueEmoji = await ctx.prisma.emoji.findUnique(input);
      return findUniqueEmoji;
    }),
  findUniqueEmojiOrThrow: shieldedProcedure
    .input(EmojiFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueEmojiOrThrow = await ctx.prisma.emoji.findUniqueOrThrow(input);
      return findUniqueEmojiOrThrow;
    }),
  groupByEmoji: shieldedProcedure
    .input(EmojiGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByEmoji = await ctx.prisma.emoji.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEmoji;
    }),
  updateManyEmoji: shieldedProcedure
    .input(EmojiUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyEmoji = await ctx.prisma.emoji.updateMany(input);
      return updateManyEmoji;
    }),
  updateOneEmoji: shieldedProcedure
    .input(EmojiUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneEmoji = await ctx.prisma.emoji.update(input);
      return updateOneEmoji;
    }),
  upsertOneEmoji: shieldedProcedure
    .input(EmojiUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneEmoji = await ctx.prisma.emoji.upsert(input);
      return upsertOneEmoji;
    }),

})
