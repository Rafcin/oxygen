import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { ConfigurationRelationFilterObjectSchema } from './ConfigurationRelationFilter.schema'
import { ConfigurationWhereInputObjectSchema } from './ConfigurationWhereInput.schema'
import { FeatureRelationFilterObjectSchema } from './FeatureRelationFilter.schema'
import { FeatureWhereInputObjectSchema } from './FeatureWhereInput.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ConfigurationFeatureWhereInputObjectSchema),
        z.lazy(() => ConfigurationFeatureWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ConfigurationFeatureWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ConfigurationFeatureWhereInputObjectSchema),
        z.lazy(() => ConfigurationFeatureWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    configuration: z
      .union([
        z.lazy(() => ConfigurationRelationFilterObjectSchema),
        z.lazy(() => ConfigurationWhereInputObjectSchema),
      ])
      .optional(),
    configurationId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    feature: z
      .union([
        z.lazy(() => FeatureRelationFilterObjectSchema),
        z.lazy(() => FeatureWhereInputObjectSchema),
      ])
      .optional(),
    featureCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    enabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  })
  .strict()

export const ConfigurationFeatureWhereInputObjectSchema = Schema
