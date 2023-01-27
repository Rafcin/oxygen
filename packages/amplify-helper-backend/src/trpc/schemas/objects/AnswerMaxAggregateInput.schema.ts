import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    selectedAt: z.literal(true).optional(),
    selectedBy: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    ownerId: z.literal(true).optional(),
    content: z.literal(true).optional(),
    url: z.literal(true).optional(),
    questionId: z.literal(true).optional(),
    participationId: z.literal(true).optional(),
  })
  .strict()

export const AnswerMaxAggregateInputObjectSchema = Schema
