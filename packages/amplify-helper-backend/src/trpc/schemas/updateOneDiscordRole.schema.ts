import { z } from 'zod'
import { DiscordRoleSelectObjectSchema } from './objects/DiscordRoleSelect.schema'
import { DiscordRoleIncludeObjectSchema } from './objects/DiscordRoleInclude.schema'
import { DiscordRoleUpdateInputObjectSchema } from './objects/DiscordRoleUpdateInput.schema'
import { DiscordRoleUncheckedUpdateInputObjectSchema } from './objects/DiscordRoleUncheckedUpdateInput.schema'
import { DiscordRoleWhereUniqueInputObjectSchema } from './objects/DiscordRoleWhereUniqueInput.schema'

export const DiscordRoleUpdateOneSchema = z.object({
  select: DiscordRoleSelectObjectSchema.optional(),
  include: DiscordRoleIncludeObjectSchema.optional(),
  data: z.union([
    DiscordRoleUpdateInputObjectSchema,
    DiscordRoleUncheckedUpdateInputObjectSchema,
  ]),
  where: DiscordRoleWhereUniqueInputObjectSchema,
})
