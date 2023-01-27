import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccountSumAggregateInputType> = z
  .object({
    expires_at: z.literal(true).optional(),
  })
  .strict()

export const AccountSumAggregateInputObjectSchema = Schema
