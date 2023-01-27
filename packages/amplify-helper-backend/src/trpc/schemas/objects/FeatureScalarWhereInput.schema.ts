import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FeatureScalarWhereInputObjectSchema),
        z.lazy(() => FeatureScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FeatureScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FeatureScalarWhereInputObjectSchema),
        z.lazy(() => FeatureScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    featureTypeCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const FeatureScalarWhereInputObjectSchema = Schema
