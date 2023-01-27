import { z } from 'zod'
import { ConfigurationFeatureSelectObjectSchema } from './objects/ConfigurationFeatureSelect.schema'
import { ConfigurationFeatureIncludeObjectSchema } from './objects/ConfigurationFeatureInclude.schema'
import { ConfigurationFeatureUpdateInputObjectSchema } from './objects/ConfigurationFeatureUpdateInput.schema'
import { ConfigurationFeatureUncheckedUpdateInputObjectSchema } from './objects/ConfigurationFeatureUncheckedUpdateInput.schema'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './objects/ConfigurationFeatureWhereUniqueInput.schema'

export const ConfigurationFeatureUpdateOneSchema = z.object({
  select: ConfigurationFeatureSelectObjectSchema.optional(),
  include: ConfigurationFeatureIncludeObjectSchema.optional(),
  data: z.union([
    ConfigurationFeatureUpdateInputObjectSchema,
    ConfigurationFeatureUncheckedUpdateInputObjectSchema,
  ]),
  where: ConfigurationFeatureWhereUniqueInputObjectSchema,
})
