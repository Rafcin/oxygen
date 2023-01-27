import { z } from 'zod'
import { ConfigurationFeatureUpdateManyMutationInputObjectSchema } from './objects/ConfigurationFeatureUpdateManyMutationInput.schema'
import { ConfigurationFeatureWhereInputObjectSchema } from './objects/ConfigurationFeatureWhereInput.schema'

export const ConfigurationFeatureUpdateManySchema = z.object({
  data: ConfigurationFeatureUpdateManyMutationInputObjectSchema,
  where: ConfigurationFeatureWhereInputObjectSchema.optional(),
})
