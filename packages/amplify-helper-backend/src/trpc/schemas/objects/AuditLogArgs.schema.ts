import { z } from 'zod'
import { AuditLogSelectObjectSchema } from './AuditLogSelect.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AuditLogArgs> = z
  .object({
    select: z.lazy(() => AuditLogSelectObjectSchema).optional(),
  })
  .strict()

export const AuditLogArgsObjectSchema = Schema
