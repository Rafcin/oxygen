import { z } from 'zod'
import { ConfigurationFeatureSelectObjectSchema } from './objects/ConfigurationFeatureSelect.schema'
import { ConfigurationFeatureIncludeObjectSchema } from './objects/ConfigurationFeatureInclude.schema'
import { ConfigurationFeatureOrderByWithRelationInputObjectSchema } from './objects/ConfigurationFeatureOrderByWithRelationInput.schema'
import { ConfigurationFeatureWhereInputObjectSchema } from './objects/ConfigurationFeatureWhereInput.schema'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './objects/ConfigurationFeatureWhereUniqueInput.schema'
import { ConfigurationFeatureScalarFieldEnumSchema } from './enums/ConfigurationFeatureScalarFieldEnum.schema'

export const ConfigurationFeatureFindManySchema = z.object({
  select: z.lazy(() => ConfigurationFeatureSelectObjectSchema.optional()),
  include: z.lazy(() => ConfigurationFeatureIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ConfigurationFeatureOrderByWithRelationInputObjectSchema,
      ConfigurationFeatureOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ConfigurationFeatureWhereInputObjectSchema.optional(),
  cursor: ConfigurationFeatureWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ConfigurationFeatureScalarFieldEnumSchema).optional(),
})
