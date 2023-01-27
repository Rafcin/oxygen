import { z } from 'zod'
import { ConfigurationSelectObjectSchema } from './objects/ConfigurationSelect.schema'
import { ConfigurationIncludeObjectSchema } from './objects/ConfigurationInclude.schema'
import { ConfigurationWhereUniqueInputObjectSchema } from './objects/ConfigurationWhereUniqueInput.schema'
import { ConfigurationCreateInputObjectSchema } from './objects/ConfigurationCreateInput.schema'
import { ConfigurationUncheckedCreateInputObjectSchema } from './objects/ConfigurationUncheckedCreateInput.schema'
import { ConfigurationUpdateInputObjectSchema } from './objects/ConfigurationUpdateInput.schema'
import { ConfigurationUncheckedUpdateInputObjectSchema } from './objects/ConfigurationUncheckedUpdateInput.schema'

export const ConfigurationUpsertSchema = z.object({
  select: ConfigurationSelectObjectSchema.optional(),
  include: ConfigurationIncludeObjectSchema.optional(),
  where: ConfigurationWhereUniqueInputObjectSchema,
  create: z.union([
    ConfigurationCreateInputObjectSchema,
    ConfigurationUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ConfigurationUpdateInputObjectSchema,
    ConfigurationUncheckedUpdateInputObjectSchema,
  ]),
})
