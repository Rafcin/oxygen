import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { FeatureTypeOrderByWithRelationInputObjectSchema } from './FeatureTypeOrderByWithRelationInput.schema'
import { ConfigurationFeatureOrderByRelationAggregateInputObjectSchema } from './ConfigurationFeatureOrderByRelationAggregateInput.schema'
import { FeatureInputsOrderByRelationAggregateInputObjectSchema } from './FeatureInputsOrderByRelationAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureOrderByWithRelationInput> = z
  .object({
    code: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => FeatureTypeOrderByWithRelationInputObjectSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    configurations: z
      .lazy(() => ConfigurationFeatureOrderByRelationAggregateInputObjectSchema)
      .optional(),
    inputs: z
      .lazy(() => FeatureInputsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    featureTypeCode: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const FeatureOrderByWithRelationInputObjectSchema = Schema
