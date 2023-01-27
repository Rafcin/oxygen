import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    configurationId: z.string(),
    featureCode: z.string(),
    enabled: z.boolean().optional(),
  })
  .strict()

export const ConfigurationFeatureUncheckedCreateInputObjectSchema = Schema
