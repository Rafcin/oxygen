import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    questionId: z.literal(true).optional(),
    participantId: z.literal(true).optional(),
  })
  .strict()

export const ParticipationMaxAggregateInputObjectSchema = Schema
