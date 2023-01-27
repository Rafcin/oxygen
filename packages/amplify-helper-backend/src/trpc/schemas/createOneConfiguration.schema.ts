import { z } from 'zod'
import { ConfigurationSelectObjectSchema } from './objects/ConfigurationSelect.schema'
import { ConfigurationIncludeObjectSchema } from './objects/ConfigurationInclude.schema'
import { ConfigurationCreateInputObjectSchema } from './objects/ConfigurationCreateInput.schema'
import { ConfigurationUncheckedCreateInputObjectSchema } from './objects/ConfigurationUncheckedCreateInput.schema'

export const ConfigurationCreateOneSchema = z.object({
  select: ConfigurationSelectObjectSchema.optional(),
  include: ConfigurationIncludeObjectSchema.optional(),
  data: z.union([
    ConfigurationCreateInputObjectSchema,
    ConfigurationUncheckedCreateInputObjectSchema,
  ]),
})
