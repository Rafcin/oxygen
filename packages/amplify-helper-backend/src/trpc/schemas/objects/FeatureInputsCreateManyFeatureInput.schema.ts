import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsCreateManyFeatureInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    name: z.string(),
    secure: z.boolean().optional(),
  })
  .strict()

export const FeatureInputsCreateManyFeatureInputObjectSchema = Schema
