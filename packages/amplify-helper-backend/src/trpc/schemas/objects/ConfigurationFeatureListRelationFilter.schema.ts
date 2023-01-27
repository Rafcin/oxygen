import { z } from 'zod'
import { ConfigurationFeatureWhereInputObjectSchema } from './ConfigurationFeatureWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureListRelationFilter> = z
  .object({
    every: z.lazy(() => ConfigurationFeatureWhereInputObjectSchema).optional(),
    some: z.lazy(() => ConfigurationFeatureWhereInputObjectSchema).optional(),
    none: z.lazy(() => ConfigurationFeatureWhereInputObjectSchema).optional(),
  })
  .strict()

export const ConfigurationFeatureListRelationFilterObjectSchema = Schema
