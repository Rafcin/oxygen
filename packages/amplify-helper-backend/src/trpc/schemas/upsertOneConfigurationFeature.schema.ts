import { z } from 'zod'
import { ConfigurationFeatureSelectObjectSchema } from './objects/ConfigurationFeatureSelect.schema'
import { ConfigurationFeatureIncludeObjectSchema } from './objects/ConfigurationFeatureInclude.schema'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './objects/ConfigurationFeatureWhereUniqueInput.schema'
import { ConfigurationFeatureCreateInputObjectSchema } from './objects/ConfigurationFeatureCreateInput.schema'
import { ConfigurationFeatureUncheckedCreateInputObjectSchema } from './objects/ConfigurationFeatureUncheckedCreateInput.schema'
import { ConfigurationFeatureUpdateInputObjectSchema } from './objects/ConfigurationFeatureUpdateInput.schema'
import { ConfigurationFeatureUncheckedUpdateInputObjectSchema } from './objects/ConfigurationFeatureUncheckedUpdateInput.schema'

export const ConfigurationFeatureUpsertSchema = z.object({
  select: ConfigurationFeatureSelectObjectSchema.optional(),
  include: ConfigurationFeatureIncludeObjectSchema.optional(),
  where: ConfigurationFeatureWhereUniqueInputObjectSchema,
  create: z.union([
    ConfigurationFeatureCreateInputObjectSchema,
    ConfigurationFeatureUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ConfigurationFeatureUpdateInputObjectSchema,
    ConfigurationFeatureUncheckedUpdateInputObjectSchema,
  ]),
})
