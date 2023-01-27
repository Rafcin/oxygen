import { z } from 'zod'
import { ConfigurationWhereInputObjectSchema } from './objects/ConfigurationWhereInput.schema'

export const ConfigurationDeleteManySchema = z.object({
  where: ConfigurationWhereInputObjectSchema.optional(),
})
