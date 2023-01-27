import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ConfigurationCountOrderByAggregateInputObjectSchema } from './ConfigurationCountOrderByAggregateInput.schema'
import { ConfigurationMaxOrderByAggregateInputObjectSchema } from './ConfigurationMaxOrderByAggregateInput.schema'
import { ConfigurationMinOrderByAggregateInputObjectSchema } from './ConfigurationMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    githubOrganization: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ConfigurationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ConfigurationMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ConfigurationMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const ConfigurationOrderByWithAggregationInputObjectSchema = Schema
