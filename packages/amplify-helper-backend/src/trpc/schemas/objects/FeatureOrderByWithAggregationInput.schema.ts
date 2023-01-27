import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { FeatureCountOrderByAggregateInputObjectSchema } from './FeatureCountOrderByAggregateInput.schema'
import { FeatureMaxOrderByAggregateInputObjectSchema } from './FeatureMaxOrderByAggregateInput.schema'
import { FeatureMinOrderByAggregateInputObjectSchema } from './FeatureMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureOrderByWithAggregationInput> = z
  .object({
    code: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    featureTypeCode: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => FeatureCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => FeatureMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => FeatureMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const FeatureOrderByWithAggregationInputObjectSchema = Schema
