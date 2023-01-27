import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    configurationId: z.literal(true).optional(),
    featureCode: z.literal(true).optional(),
    enabled: z.literal(true).optional(),
  })
  .strict()

export const ConfigurationFeatureMaxAggregateInputObjectSchema = Schema