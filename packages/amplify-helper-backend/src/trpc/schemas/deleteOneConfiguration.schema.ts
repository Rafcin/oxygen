import { z } from 'zod'
import { ConfigurationSelectObjectSchema } from './objects/ConfigurationSelect.schema'
import { ConfigurationIncludeObjectSchema } from './objects/ConfigurationInclude.schema'
import { ConfigurationWhereUniqueInputObjectSchema } from './objects/ConfigurationWhereUniqueInput.schema'

export const ConfigurationDeleteOneSchema = z.object({
  select: ConfigurationSelectObjectSchema.optional(),
  include: ConfigurationIncludeObjectSchema.optional(),
  where: ConfigurationWhereUniqueInputObjectSchema,
})
