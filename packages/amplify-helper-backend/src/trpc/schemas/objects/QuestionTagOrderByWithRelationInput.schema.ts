import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { QuestionOrderByRelationAggregateInputObjectSchema } from './QuestionOrderByRelationAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionTagOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    questions: z
      .lazy(() => QuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const QuestionTagOrderByWithRelationInputObjectSchema = Schema
