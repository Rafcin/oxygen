import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { FeatureListRelationFilterObjectSchema } from './FeatureListRelationFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FeatureTypeWhereInputObjectSchema),
        z.lazy(() => FeatureTypeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FeatureTypeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FeatureTypeWhereInputObjectSchema),
        z.lazy(() => FeatureTypeWhereInputObjectSchema).array(),
      ])
      .optional(),
    code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    features: z.lazy(() => FeatureListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const FeatureTypeWhereInputObjectSchema = Schema
