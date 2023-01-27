import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { QuestionTagCountOrderByAggregateInputObjectSchema } from './QuestionTagCountOrderByAggregateInput.schema'
import { QuestionTagMaxOrderByAggregateInputObjectSchema } from './QuestionTagMaxOrderByAggregateInput.schema'
import { QuestionTagMinOrderByAggregateInputObjectSchema } from './QuestionTagMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => QuestionTagCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => QuestionTagMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => QuestionTagMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const QuestionTagOrderByWithAggregationInputObjectSchema = Schema
