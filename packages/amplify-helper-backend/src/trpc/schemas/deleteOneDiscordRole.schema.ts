import { z } from 'zod'
import { DiscordRoleSelectObjectSchema } from './objects/DiscordRoleSelect.schema'
import { DiscordRoleIncludeObjectSchema } from './objects/DiscordRoleInclude.schema'
import { DiscordRoleWhereUniqueInputObjectSchema } from './objects/DiscordRoleWhereUniqueInput.schema'

export const DiscordRoleDeleteOneSchema = z.object({
  select: DiscordRoleSelectObjectSchema.optional(),
  include: DiscordRoleIncludeObjectSchema.optional(),
  where: DiscordRoleWhereUniqueInputObjectSchema,
})
