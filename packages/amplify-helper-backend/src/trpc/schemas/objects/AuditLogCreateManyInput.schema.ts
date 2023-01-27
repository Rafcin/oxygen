import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AuditLogCreateManyInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    userId: z.string(),
    action: z.string(),
    data: z.string(),
  })
  .strict()

export const AuditLogCreateManyInputObjectSchema = Schema
