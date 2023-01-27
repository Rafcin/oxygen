import { z } from 'zod'
import { DiscordRoleSelectObjectSchema } from './objects/DiscordRoleSelect.schema'
import { DiscordRoleIncludeObjectSchema } from './objects/DiscordRoleInclude.schema'
import { DiscordRoleCreateInputObjectSchema } from './objects/DiscordRoleCreateInput.schema'
import { DiscordRoleUncheckedCreateInputObjectSchema } from './objects/DiscordRoleUncheckedCreateInput.schema'

export const DiscordRoleCreateOneSchema = z.object({
  select: DiscordRoleSelectObjectSchema.optional(),
  include: DiscordRoleIncludeObjectSchema.optional(),
  data: z.union([
    DiscordRoleCreateInputObjectSchema,
    DiscordRoleUncheckedCreateInputObjectSchema,
  ]),
})
