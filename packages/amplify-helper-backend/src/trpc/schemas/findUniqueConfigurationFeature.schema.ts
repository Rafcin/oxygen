import { z } from 'zod'
import { ConfigurationFeatureSelectObjectSchema } from './objects/ConfigurationFeatureSelect.schema'
import { ConfigurationFeatureIncludeObjectSchema } from './objects/ConfigurationFeatureInclude.schema'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './objects/ConfigurationFeatureWhereUniqueInput.schema'

export const ConfigurationFeatureFindUniqueSchema = z.object({
  select: ConfigurationFeatureSelectObjectSchema.optional(),
  include: ConfigurationFeatureIncludeObjectSchema.optional(),
  where: ConfigurationFeatureWhereUniqueInputObjectSchema,
})
