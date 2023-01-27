import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeWhereUniqueInput> = z
  .object({
    code: z.string().optional(),
  })
  .strict()

export const FeatureTypeWhereUniqueInputObjectSchema = Schema
