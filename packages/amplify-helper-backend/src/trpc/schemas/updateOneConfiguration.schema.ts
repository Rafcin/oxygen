import { z } from 'zod'
import { ConfigurationSelectObjectSchema } from './objects/ConfigurationSelect.schema'
import { ConfigurationIncludeObjectSchema } from './objects/ConfigurationInclude.schema'
import { ConfigurationUpdateInputObjectSchema } from './objects/ConfigurationUpdateInput.schema'
import { ConfigurationUncheckedUpdateInputObjectSchema } from './objects/ConfigurationUncheckedUpdateInput.schema'
import { ConfigurationWhereUniqueInputObjectSchema } from './objects/ConfigurationWhereUniqueInput.schema'

export const ConfigurationUpdateOneSchema = z.object({
  select: ConfigurationSelectObjectSchema.optional(),
  include: ConfigurationIncludeObjectSchema.optional(),
  data: z.union([
    ConfigurationUpdateInputObjectSchema,
    ConfigurationUncheckedUpdateInputObjectSchema,
  ]),
  where: ConfigurationWhereUniqueInputObjectSchema,
})
