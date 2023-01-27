import { z } from 'zod'
import { FeatureFindManySchema } from '../findManyFeature.schema'
import { FeatureTypeCountOutputTypeArgsObjectSchema } from './FeatureTypeCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeInclude> = z
  .object({
    features: z.union([z.boolean(), z.lazy(() => FeatureFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => FeatureTypeCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const FeatureTypeIncludeObjectSchema = Schema
