import { z } from 'zod'
import { FeatureArgsObjectSchema } from './FeatureArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    feature: z
      .union([z.boolean(), z.lazy(() => FeatureArgsObjectSchema)])
      .optional(),
    featureCode: z.boolean().optional(),
    name: z.boolean().optional(),
    secure: z.boolean().optional(),
  })
  .strict()

export const FeatureInputsSelectObjectSchema = Schema
