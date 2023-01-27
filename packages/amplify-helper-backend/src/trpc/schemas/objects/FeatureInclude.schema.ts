import { z } from 'zod'
import { FeatureTypeArgsObjectSchema } from './FeatureTypeArgs.schema'
import { ConfigurationFeatureFindManySchema } from '../findManyConfigurationFeature.schema'
import { FeatureInputsFindManySchema } from '../findManyFeatureInputs.schema'
import { FeatureCountOutputTypeArgsObjectSchema } from './FeatureCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInclude> = z
  .object({
    type: z
      .union([z.boolean(), z.lazy(() => FeatureTypeArgsObjectSchema)])
      .optional(),
    configurations: z
      .union([z.boolean(), z.lazy(() => ConfigurationFeatureFindManySchema)])
      .optional(),
    inputs: z
      .union([z.boolean(), z.lazy(() => FeatureInputsFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => FeatureCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const FeatureIncludeObjectSchema = Schema
