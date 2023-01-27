import { z } from 'zod'
import { ConfigurationFeatureCreateManyConfigurationInputObjectSchema } from './ConfigurationFeatureCreateManyConfigurationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureCreateManyConfigurationInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ConfigurationFeatureCreateManyConfigurationInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const ConfigurationFeatureCreateManyConfigurationInputEnvelopeObjectSchema =
  Schema
