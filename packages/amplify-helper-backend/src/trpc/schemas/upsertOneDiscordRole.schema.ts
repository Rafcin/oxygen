import { z } from 'zod'
import { DiscordRoleSelectObjectSchema } from './objects/DiscordRoleSelect.schema'
import { DiscordRoleIncludeObjectSchema } from './objects/DiscordRoleInclude.schema'
import { DiscordRoleWhereUniqueInputObjectSchema } from './objects/DiscordRoleWhereUniqueInput.schema'
import { DiscordRoleCreateInputObjectSchema } from './objects/DiscordRoleCreateInput.schema'
import { DiscordRoleUncheckedCreateInputObjectSchema } from './objects/DiscordRoleUncheckedCreateInput.schema'
import { DiscordRoleUpdateInputObjectSchema } from './objects/DiscordRoleUpdateInput.schema'
import { DiscordRoleUncheckedUpdateInputObjectSchema } from './objects/DiscordRoleUncheckedUpdateInput.schema'

export const DiscordRoleUpsertSchema = z.object({
  select: DiscordRoleSelectObjectSchema.optional(),
  include: DiscordRoleIncludeObjectSchema.optional(),
  where: DiscordRoleWhereUniqueInputObjectSchema,
  create: z.union([
    DiscordRoleCreateInputObjectSchema,
    DiscordRoleUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DiscordRoleUpdateInputObjectSchema,
    DiscordRoleUncheckedUpdateInputObjectSchema,
  ]),
})
