import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AnswerCountOrderByAggregateInputObjectSchema } from './AnswerCountOrderByAggregateInput.schema'
import { AnswerMaxOrderByAggregateInputObjectSchema } from './AnswerMaxOrderByAggregateInput.schema'
import { AnswerMinOrderByAggregateInputObjectSchema } from './AnswerMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    selectedAt: z.lazy(() => SortOrderSchema).optional(),
    selectedBy: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    participationId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => AnswerCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => AnswerMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AnswerMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const AnswerOrderByWithAggregationInputObjectSchema = Schema
