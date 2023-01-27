import { z } from 'zod'
import { ConfigurationArgsObjectSchema } from './ConfigurationArgs.schema'
import { FeatureArgsObjectSchema } from './FeatureArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureInclude> = z
  .object({
    configuration: z
      .union([z.boolean(), z.lazy(() => ConfigurationArgsObjectSchema)])
      .optional(),
    feature: z
      .union([z.boolean(), z.lazy(() => FeatureArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const ConfigurationFeatureIncludeObjectSchema = Schema
