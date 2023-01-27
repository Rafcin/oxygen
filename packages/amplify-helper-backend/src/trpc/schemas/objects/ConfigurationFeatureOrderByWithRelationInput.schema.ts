import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ConfigurationOrderByWithRelationInputObjectSchema } from './ConfigurationOrderByWithRelationInput.schema'
import { FeatureOrderByWithRelationInputObjectSchema } from './FeatureOrderByWithRelationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    configuration: z
      .lazy(() => ConfigurationOrderByWithRelationInputObjectSchema)
      .optional(),
    configurationId: z.lazy(() => SortOrderSchema).optional(),
    feature: z.lazy(() => FeatureOrderByWithRelationInputObjectSchema).optional(),
    featureCode: z.lazy(() => SortOrderSchema).optional(),
    enabled: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const ConfigurationFeatureOrderByWithRelationInputObjectSchema = Schema
