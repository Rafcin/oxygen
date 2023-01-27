import { z } from 'zod'
import { ConfigurationSelectObjectSchema } from './objects/ConfigurationSelect.schema'
import { ConfigurationIncludeObjectSchema } from './objects/ConfigurationInclude.schema'
import { ConfigurationOrderByWithRelationInputObjectSchema } from './objects/ConfigurationOrderByWithRelationInput.schema'
import { ConfigurationWhereInputObjectSchema } from './objects/ConfigurationWhereInput.schema'
import { ConfigurationWhereUniqueInputObjectSchema } from './objects/ConfigurationWhereUniqueInput.schema'
import { ConfigurationScalarFieldEnumSchema } from './enums/ConfigurationScalarFieldEnum.schema'

export const ConfigurationFindFirstSchema = z.object({
  select: ConfigurationSelectObjectSchema.optional(),
  include: ConfigurationIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      ConfigurationOrderByWithRelationInputObjectSchema,
      ConfigurationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ConfigurationWhereInputObjectSchema.optional(),
  cursor: ConfigurationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ConfigurationScalarFieldEnumSchema).optional(),
})
