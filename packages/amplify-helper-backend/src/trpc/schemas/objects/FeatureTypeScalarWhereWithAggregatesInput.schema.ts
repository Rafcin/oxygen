import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FeatureTypeScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => FeatureTypeScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FeatureTypeScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FeatureTypeScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => FeatureTypeScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    code: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const FeatureTypeScalarWhereWithAggregatesInputObjectSchema = Schema
