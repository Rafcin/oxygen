import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AccessLevelCountOrderByAggregateInputObjectSchema } from './AccessLevelCountOrderByAggregateInput.schema'
import { AccessLevelMaxOrderByAggregateInputObjectSchema } from './AccessLevelMaxOrderByAggregateInput.schema'
import { AccessLevelMinOrderByAggregateInputObjectSchema } from './AccessLevelMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelOrderByWithAggregationInput> = z
  .object({
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AccessLevelCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => AccessLevelMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AccessLevelMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const AccessLevelOrderByWithAggregationInputObjectSchema = Schema
