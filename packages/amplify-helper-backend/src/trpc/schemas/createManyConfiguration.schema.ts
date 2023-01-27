import { z } from 'zod'
import { ConfigurationCreateManyInputObjectSchema } from './objects/ConfigurationCreateManyInput.schema'

export const ConfigurationCreateManySchema = z.object({
  data: z.union([
    ConfigurationCreateManyInputObjectSchema,
    z.array(ConfigurationCreateManyInputObjectSchema),
  ]),
})
