import { t, shieldedProcedure } from "./helpers/createRouter";
import { MessageFindUniqueSchema } from "../schemas/findUniqueMessage.schema";
import { MessageFindFirstSchema } from "../schemas/findFirstMessage.schema";
import { MessageFindManySchema } from "../schemas/findManyMessage.schema";
import { MessageCreateOneSchema } from "../schemas/createOneMessage.schema";
import { MessageCreateManySchema } from "../schemas/createManyMessage.schema";
import { MessageDeleteOneSchema } from "../schemas/deleteOneMessage.schema";
import { MessageUpdateOneSchema } from "../schemas/updateOneMessage.schema";
import { MessageDeleteManySchema } from "../schemas/deleteManyMessage.schema";
import { MessageUpdateManySchema } from "../schemas/updateManyMessage.schema";
import { MessageUpsertSchema } from "../schemas/upsertOneMessage.schema";
import { MessageAggregateSchema } from "../schemas/aggregateMessage.schema";
import { MessageGroupBySchema } from "../schemas/groupByMessage.schema";
import { MessageFindRawObjectSchema } from "../schemas/objects/MessageFindRaw.schema";
import { MessageAggregateRawObjectSchema } from "../schemas/objects/MessageAggregateRaw.schema";

export const messagesRouter = t.router({
  aggregateMessage: shieldedProcedure
    .input(MessageAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateMessage = await ctx.prisma.message.aggregate(input);
      return aggregateMessage;
    }),
  aggregateMessageRaw: shieldedProcedure
    .input(MessageAggregateRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const aggregateMessageRaw = await ctx.prisma.message.aggregateRaw(input);
      return aggregateMessageRaw;
    }),
  createManyMessage: shieldedProcedure
    .input(MessageCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyMessage = await ctx.prisma.message.createMany(input);
      return createManyMessage;
    }),
  createOneMessage: shieldedProcedure
    .input(MessageCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneMessage = await ctx.prisma.message.create(input);
      return createOneMessage;
    }),
  deleteManyMessage: shieldedProcedure
    .input(MessageDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyMessage = await ctx.prisma.message.deleteMany(input);
      return deleteManyMessage;
    }),
  deleteOneMessage: shieldedProcedure
    .input(MessageDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneMessage = await ctx.prisma.message.delete(input);
      return deleteOneMessage;
    }),
  findFirstMessage: shieldedProcedure
    .input(MessageFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstMessage = await ctx.prisma.message.findFirst(input);
      return findFirstMessage;
    }),
  findFirstMessageOrThrow: shieldedProcedure
    .input(MessageFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstMessageOrThrow = await ctx.prisma.message.findFirstOrThrow(input);
      return findFirstMessageOrThrow;
    }),
  findManyMessage: shieldedProcedure
    .input(MessageFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyMessage = await ctx.prisma.message.findMany(input);
      return findManyMessage;
    }),
  findMessageRaw: shieldedProcedure
    .input(MessageFindRawObjectSchema)
    .query(async ({ ctx, input }) => {
      const findMessageRaw = await ctx.prisma.message.findRaw(input);
      return findMessageRaw;
    }),
  findUniqueMessage: shieldedProcedure
    .input(MessageFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueMessage = await ctx.prisma.message.findUnique(input);
      return findUniqueMessage;
    }),
  findUniqueMessageOrThrow: shieldedProcedure
    .input(MessageFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueMessageOrThrow = await ctx.prisma.message.findUniqueOrThrow(input);
      return findUniqueMessageOrThrow;
    }),
  groupByMessage: shieldedProcedure
    .input(MessageGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByMessage = await ctx.prisma.message.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByMessage;
    }),
  updateManyMessage: shieldedProcedure
    .input(MessageUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyMessage = await ctx.prisma.message.updateMany(input);
      return updateManyMessage;
    }),
  updateOneMessage: shieldedProcedure
    .input(MessageUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneMessage = await ctx.prisma.message.update(input);
      return updateOneMessage;
    }),
  upsertOneMessage: shieldedProcedure
    .input(MessageUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneMessage = await ctx.prisma.message.upsert(input);
      return upsertOneMessage;
    }),

})
