import { z } from 'zod'
import { ConfigurationFeatureCreateManyFeatureInputObjectSchema } from './ConfigurationFeatureCreateManyFeatureInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureCreateManyFeatureInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => ConfigurationFeatureCreateManyFeatureInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const ConfigurationFeatureCreateManyFeatureInputEnvelopeObjectSchema = Schema
