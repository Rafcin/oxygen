import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccountMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    type: z.literal(true).optional(),
    provider: z.literal(true).optional(),
    providerAccountId: z.literal(true).optional(),
    refresh_token: z.literal(true).optional(),
    access_token: z.literal(true).optional(),
    expires_at: z.literal(true).optional(),
    token_type: z.literal(true).optional(),
    scope: z.literal(true).optional(),
    id_token: z.literal(true).optional(),
    session_state: z.literal(true).optional(),
  })
  .strict()

export const AccountMinAggregateInputObjectSchema = Schema
