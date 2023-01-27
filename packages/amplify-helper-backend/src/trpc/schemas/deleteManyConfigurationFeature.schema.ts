import { z } from 'zod'
import { ConfigurationFeatureWhereInputObjectSchema } from './objects/ConfigurationFeatureWhereInput.schema'

export const ConfigurationFeatureDeleteManySchema = z.object({
  where: ConfigurationFeatureWhereInputObjectSchema.optional(),
})
