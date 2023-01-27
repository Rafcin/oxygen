import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const FeatureInputsWhereUniqueInputObjectSchema = Schema
