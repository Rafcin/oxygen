import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    participantId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const ParticipationMaxOrderByAggregateInputObjectSchema = Schema
