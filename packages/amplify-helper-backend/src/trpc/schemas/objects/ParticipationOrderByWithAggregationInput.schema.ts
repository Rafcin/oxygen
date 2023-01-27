import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ParticipationCountOrderByAggregateInputObjectSchema } from './ParticipationCountOrderByAggregateInput.schema'
import { ParticipationMaxOrderByAggregateInputObjectSchema } from './ParticipationMaxOrderByAggregateInput.schema'
import { ParticipationMinOrderByAggregateInputObjectSchema } from './ParticipationMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ParticipationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    participantId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ParticipationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ParticipationMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ParticipationMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const ParticipationOrderByWithAggregationInputObjectSchema = Schema
