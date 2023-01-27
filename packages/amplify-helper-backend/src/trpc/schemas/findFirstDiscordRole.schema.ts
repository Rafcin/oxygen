import { z } from 'zod'
import { DiscordRoleSelectObjectSchema } from './objects/DiscordRoleSelect.schema'
import { DiscordRoleIncludeObjectSchema } from './objects/DiscordRoleInclude.schema'
import { DiscordRoleOrderByWithRelationInputObjectSchema } from './objects/DiscordRoleOrderByWithRelationInput.schema'
import { DiscordRoleWhereInputObjectSchema } from './objects/DiscordRoleWhereInput.schema'
import { DiscordRoleWhereUniqueInputObjectSchema } from './objects/DiscordRoleWhereUniqueInput.schema'
import { DiscordRoleScalarFieldEnumSchema } from './enums/DiscordRoleScalarFieldEnum.schema'

export const DiscordRoleFindFirstSchema = z.object({
  select: DiscordRoleSelectObjectSchema.optional(),
  include: DiscordRoleIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      DiscordRoleOrderByWithRelationInputObjectSchema,
      DiscordRoleOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DiscordRoleWhereInputObjectSchema.optional(),
  cursor: DiscordRoleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DiscordRoleScalarFieldEnumSchema).optional(),
})
