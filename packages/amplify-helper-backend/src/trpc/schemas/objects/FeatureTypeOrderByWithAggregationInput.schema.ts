import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { FeatureTypeCountOrderByAggregateInputObjectSchema } from './FeatureTypeCountOrderByAggregateInput.schema'
import { FeatureTypeMaxOrderByAggregateInputObjectSchema } from './FeatureTypeMaxOrderByAggregateInput.schema'
import { FeatureTypeMinOrderByAggregateInputObjectSchema } from './FeatureTypeMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeOrderByWithAggregationInput> = z
  .object({
    code: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => FeatureTypeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => FeatureTypeMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => FeatureTypeMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const FeatureTypeOrderByWithAggregationInputObjectSchema = Schema
