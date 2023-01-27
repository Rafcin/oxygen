import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    questionId: z.literal(true).optional(),
    participantId: z.literal(true).optional(),
  })
  .strict()

export const ParticipationMinAggregateInputObjectSchema = Schema
