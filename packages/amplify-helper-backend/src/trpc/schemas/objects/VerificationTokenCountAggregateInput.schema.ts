import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.VerificationTokenCountAggregateInputType> = z
  .object({
    identifier: z.literal(true).optional(),
    token: z.literal(true).optional(),
    expires: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const VerificationTokenCountAggregateInputObjectSchema = Schema
