import { z } from 'zod'
import { FeatureInputsWhereInputObjectSchema } from './FeatureInputsWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsListRelationFilter> = z
  .object({
    every: z.lazy(() => FeatureInputsWhereInputObjectSchema).optional(),
    some: z.lazy(() => FeatureInputsWhereInputObjectSchema).optional(),
    none: z.lazy(() => FeatureInputsWhereInputObjectSchema).optional(),
  })
  .strict()

export const FeatureInputsListRelationFilterObjectSchema = Schema
