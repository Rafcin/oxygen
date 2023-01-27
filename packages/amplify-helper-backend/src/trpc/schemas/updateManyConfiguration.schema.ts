import { z } from 'zod'
import { ConfigurationUpdateManyMutationInputObjectSchema } from './objects/ConfigurationUpdateManyMutationInput.schema'
import { ConfigurationWhereInputObjectSchema } from './objects/ConfigurationWhereInput.schema'

export const ConfigurationUpdateManySchema = z.object({
  data: ConfigurationUpdateManyMutationInputObjectSchema,
  where: ConfigurationWhereInputObjectSchema.optional(),
})
