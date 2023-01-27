import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { FeatureOrderByWithRelationInputObjectSchema } from './FeatureOrderByWithRelationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    feature: z.lazy(() => FeatureOrderByWithRelationInputObjectSchema).optional(),
    featureCode: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    secure: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const FeatureInputsOrderByWithRelationInputObjectSchema = Schema
