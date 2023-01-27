import { t, publicProcedure } from "./helpers/createRouter";
import { AuditLogFindUniqueSchema } from "../schemas/findUniqueAuditLog.schema";
import { AuditLogFindFirstSchema } from "../schemas/findFirstAuditLog.schema";
import { AuditLogFindManySchema } from "../schemas/findManyAuditLog.schema";
import { AuditLogCreateOneSchema } from "../schemas/createOneAuditLog.schema";
import { AuditLogCreateManySchema } from "../schemas/createManyAuditLog.schema";
import { AuditLogDeleteOneSchema } from "../schemas/deleteOneAuditLog.schema";
import { AuditLogUpdateOneSchema } from "../schemas/updateOneAuditLog.schema";
import { AuditLogDeleteManySchema } from "../schemas/deleteManyAuditLog.schema";
import { AuditLogUpdateManySchema } from "../schemas/updateManyAuditLog.schema";
import { AuditLogUpsertSchema } from "../schemas/upsertOneAuditLog.schema";
import { AuditLogAggregateSchema } from "../schemas/aggregateAuditLog.schema";
import { AuditLogGroupBySchema } from "../schemas/groupByAuditLog.schema";

export const auditlogsRouter = t.router({
  aggregateAuditLog: publicProcedure
    .input(AuditLogAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateAuditLog = await ctx.prisma.auditLog.aggregate(input);
      return aggregateAuditLog;
    }),
  createManyAuditLog: publicProcedure
    .input(AuditLogCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyAuditLog = await ctx.prisma.auditLog.createMany(input);
      return createManyAuditLog;
    }),
  createOneAuditLog: publicProcedure
    .input(AuditLogCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneAuditLog = await ctx.prisma.auditLog.create(input);
      return createOneAuditLog;
    }),
  deleteManyAuditLog: publicProcedure
    .input(AuditLogDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyAuditLog = await ctx.prisma.auditLog.deleteMany(input);
      return deleteManyAuditLog;
    }),
  deleteOneAuditLog: publicProcedure
    .input(AuditLogDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneAuditLog = await ctx.prisma.auditLog.delete(input);
      return deleteOneAuditLog;
    }),
  findFirstAuditLog: publicProcedure
    .input(AuditLogFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstAuditLog = await ctx.prisma.auditLog.findFirst(input);
      return findFirstAuditLog;
    }),
  findFirstAuditLogOrThrow: publicProcedure
    .input(AuditLogFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstAuditLogOrThrow = await ctx.prisma.auditLog.findFirstOrThrow(input);
      return findFirstAuditLogOrThrow;
    }),
  findManyAuditLog: publicProcedure
    .input(AuditLogFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyAuditLog = await ctx.prisma.auditLog.findMany(input);
      return findManyAuditLog;
    }),
  findUniqueAuditLog: publicProcedure
    .input(AuditLogFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueAuditLog = await ctx.prisma.auditLog.findUnique(input);
      return findUniqueAuditLog;
    }),
  findUniqueAuditLogOrThrow: publicProcedure
    .input(AuditLogFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueAuditLogOrThrow = await ctx.prisma.auditLog.findUniqueOrThrow(input);
      return findUniqueAuditLogOrThrow;
    }),
  groupByAuditLog: publicProcedure
    .input(AuditLogGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByAuditLog = await ctx.prisma.auditLog.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAuditLog;
    }),
  updateManyAuditLog: publicProcedure
    .input(AuditLogUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyAuditLog = await ctx.prisma.auditLog.updateMany(input);
      return updateManyAuditLog;
    }),
  updateOneAuditLog: publicProcedure
    .input(AuditLogUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneAuditLog = await ctx.prisma.auditLog.update(input);
      return updateOneAuditLog;
    }),
  upsertOneAuditLog: publicProcedure
    .input(AuditLogUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneAuditLog = await ctx.prisma.auditLog.upsert(input);
      return upsertOneAuditLog;
    }),

})
