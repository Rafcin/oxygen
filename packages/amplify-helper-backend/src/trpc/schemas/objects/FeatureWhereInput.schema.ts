import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { FeatureTypeRelationFilterObjectSchema } from './FeatureTypeRelationFilter.schema'
import { FeatureTypeWhereInputObjectSchema } from './FeatureTypeWhereInput.schema'
import { ConfigurationFeatureListRelationFilterObjectSchema } from './ConfigurationFeatureListRelationFilter.schema'
import { FeatureInputsListRelationFilterObjectSchema } from './FeatureInputsListRelationFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FeatureWhereInputObjectSchema),
        z.lazy(() => FeatureWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FeatureWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FeatureWhereInputObjectSchema),
        z.lazy(() => FeatureWhereInputObjectSchema).array(),
      ])
      .optional(),
    code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    type: z
      .union([
        z.lazy(() => FeatureTypeRelationFilterObjectSchema),
        z.lazy(() => FeatureTypeWhereInputObjectSchema),
      ])
      .optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    configurations: z
      .lazy(() => ConfigurationFeatureListRelationFilterObjectSchema)
      .optional(),
    inputs: z.lazy(() => FeatureInputsListRelationFilterObjectSchema).optional(),
    featureTypeCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const FeatureWhereInputObjectSchema = Schema
