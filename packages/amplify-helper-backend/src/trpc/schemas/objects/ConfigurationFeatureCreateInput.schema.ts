import { z } from 'zod'
import { ConfigurationCreateNestedOneWithoutFeaturesInputObjectSchema } from './ConfigurationCreateNestedOneWithoutFeaturesInput.schema'
import { FeatureCreateNestedOneWithoutConfigurationsInputObjectSchema } from './FeatureCreateNestedOneWithoutConfigurationsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureCreateInput> = z
  .object({
    id: z.string().optional(),
    configuration: z.lazy(
      () => ConfigurationCreateNestedOneWithoutFeaturesInputObjectSchema
    ),
    feature: z.lazy(
      () => FeatureCreateNestedOneWithoutConfigurationsInputObjectSchema
    ),
    enabled: z.boolean().optional(),
  })
  .strict()

export const ConfigurationFeatureCreateInputObjectSchema = Schema
