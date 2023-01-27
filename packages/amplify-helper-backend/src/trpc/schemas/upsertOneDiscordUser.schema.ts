import { z } from 'zod'
import { DiscordUserSelectObjectSchema } from './objects/DiscordUserSelect.schema'
import { DiscordUserIncludeObjectSchema } from './objects/DiscordUserInclude.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './objects/DiscordUserWhereUniqueInput.schema'
import { DiscordUserCreateInputObjectSchema } from './objects/DiscordUserCreateInput.schema'
import { DiscordUserUncheckedCreateInputObjectSchema } from './objects/DiscordUserUncheckedCreateInput.schema'
import { DiscordUserUpdateInputObjectSchema } from './objects/DiscordUserUpdateInput.schema'
import { DiscordUserUncheckedUpdateInputObjectSchema } from './objects/DiscordUserUncheckedUpdateInput.schema'

export const DiscordUserUpsertSchema = z.object({
  select: DiscordUserSelectObjectSchema.optional(),
  include: DiscordUserIncludeObjectSchema.optional(),
  where: DiscordUserWhereUniqueInputObjectSchema,
  create: z.union([
    DiscordUserCreateInputObjectSchema,
    DiscordUserUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DiscordUserUpdateInputObjectSchema,
    DiscordUserUncheckedUpdateInputObjectSchema,
  ]),
})
