import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => ConfigurationFeatureScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => ConfigurationFeatureScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ConfigurationFeatureScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => ConfigurationFeatureScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => ConfigurationFeatureScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      configurationId: z
        .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      featureCode: z
        .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      enabled: z
        .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
        .optional(),
    })
    .strict()

export const ConfigurationFeatureScalarWhereWithAggregatesInputObjectSchema = Schema
