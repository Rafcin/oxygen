import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    configurationId: z.lazy(() => SortOrderSchema).optional(),
    featureCode: z.lazy(() => SortOrderSchema).optional(),
    enabled: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const ConfigurationFeatureMaxOrderByAggregateInputObjectSchema = Schema
