import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ConfigurationFeatureCountOrderByAggregateInputObjectSchema } from './ConfigurationFeatureCountOrderByAggregateInput.schema'
import { ConfigurationFeatureMaxOrderByAggregateInputObjectSchema } from './ConfigurationFeatureMaxOrderByAggregateInput.schema'
import { ConfigurationFeatureMinOrderByAggregateInputObjectSchema } from './ConfigurationFeatureMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    configurationId: z.lazy(() => SortOrderSchema).optional(),
    featureCode: z.lazy(() => SortOrderSchema).optional(),
    enabled: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ConfigurationFeatureCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ConfigurationFeatureMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ConfigurationFeatureMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const ConfigurationFeatureOrderByWithAggregationInputObjectSchema = Schema
