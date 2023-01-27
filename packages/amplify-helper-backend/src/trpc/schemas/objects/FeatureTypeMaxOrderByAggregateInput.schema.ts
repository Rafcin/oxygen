import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeMaxOrderByAggregateInput> = z
  .object({
    code: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const FeatureTypeMaxOrderByAggregateInputObjectSchema = Schema
