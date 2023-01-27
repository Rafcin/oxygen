import { z } from 'zod'
import { ConfigurationFeatureCreateManyInputObjectSchema } from './objects/ConfigurationFeatureCreateManyInput.schema'

export const ConfigurationFeatureCreateManySchema = z.object({
  data: z.union([
    ConfigurationFeatureCreateManyInputObjectSchema,
    z.array(ConfigurationFeatureCreateManyInputObjectSchema),
  ]),
})
