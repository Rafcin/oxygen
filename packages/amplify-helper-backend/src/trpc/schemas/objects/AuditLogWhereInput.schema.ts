import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AuditLogWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AuditLogWhereInputObjectSchema),
        z.lazy(() => AuditLogWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AuditLogWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AuditLogWhereInputObjectSchema),
        z.lazy(() => AuditLogWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    action: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    data: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const AuditLogWhereInputObjectSchema = Schema
