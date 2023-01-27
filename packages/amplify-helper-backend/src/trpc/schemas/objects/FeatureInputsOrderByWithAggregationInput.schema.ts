import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { FeatureInputsCountOrderByAggregateInputObjectSchema } from './FeatureInputsCountOrderByAggregateInput.schema'
import { FeatureInputsMaxOrderByAggregateInputObjectSchema } from './FeatureInputsMaxOrderByAggregateInput.schema'
import { FeatureInputsMinOrderByAggregateInputObjectSchema } from './FeatureInputsMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    featureCode: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    secure: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => FeatureInputsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => FeatureInputsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => FeatureInputsMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const FeatureInputsOrderByWithAggregationInputObjectSchema = Schema
