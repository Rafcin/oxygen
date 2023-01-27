import { z } from 'zod'
import { ConfigurationFeatureSelectObjectSchema } from './objects/ConfigurationFeatureSelect.schema'
import { ConfigurationFeatureIncludeObjectSchema } from './objects/ConfigurationFeatureInclude.schema'
import { ConfigurationFeatureCreateInputObjectSchema } from './objects/ConfigurationFeatureCreateInput.schema'
import { ConfigurationFeatureUncheckedCreateInputObjectSchema } from './objects/ConfigurationFeatureUncheckedCreateInput.schema'

export const ConfigurationFeatureCreateOneSchema = z.object({
  select: ConfigurationFeatureSelectObjectSchema.optional(),
  include: ConfigurationFeatureIncludeObjectSchema.optional(),
  data: z.union([
    ConfigurationFeatureCreateInputObjectSchema,
    ConfigurationFeatureUncheckedCreateInputObjectSchema,
  ]),
})
