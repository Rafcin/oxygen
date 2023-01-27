import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ConfigurationFeatureScalarWhereInputObjectSchema),
        z.lazy(() => ConfigurationFeatureScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ConfigurationFeatureScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ConfigurationFeatureScalarWhereInputObjectSchema),
        z.lazy(() => ConfigurationFeatureScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    configurationId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    featureCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    enabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  })
  .strict()

export const ConfigurationFeatureScalarWhereInputObjectSchema = Schema
