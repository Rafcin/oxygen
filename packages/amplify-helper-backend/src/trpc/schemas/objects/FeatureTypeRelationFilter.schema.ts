import { z } from 'zod'
import { FeatureTypeWhereInputObjectSchema } from './FeatureTypeWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeRelationFilter> = z
  .object({
    is: z.lazy(() => FeatureTypeWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => FeatureTypeWhereInputObjectSchema).optional(),
  })
  .strict()

export const FeatureTypeRelationFilterObjectSchema = Schema
