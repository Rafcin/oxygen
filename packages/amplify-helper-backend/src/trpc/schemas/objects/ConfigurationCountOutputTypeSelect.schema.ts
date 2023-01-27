import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationCountOutputTypeSelect> = z
  .object({
    roles: z.boolean().optional(),
    features: z.boolean().optional(),
  })
  .strict()

export const ConfigurationCountOutputTypeSelectObjectSchema = Schema
