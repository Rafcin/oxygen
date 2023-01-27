import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUncheckedCreateWithoutFeatureInput> =
  z
    .object({
      id: z.string().optional(),
      configurationId: z.string(),
      enabled: z.boolean().optional(),
    })
    .strict()

export const ConfigurationFeatureUncheckedCreateWithoutFeatureInputObjectSchema =
  Schema
