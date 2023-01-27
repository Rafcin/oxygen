import { z } from 'zod'
import { FeatureInputsCreateManyFeatureInputObjectSchema } from './FeatureInputsCreateManyFeatureInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsCreateManyFeatureInputEnvelope> = z
  .object({
    data: z.lazy(() => FeatureInputsCreateManyFeatureInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const FeatureInputsCreateManyFeatureInputEnvelopeObjectSchema = Schema
