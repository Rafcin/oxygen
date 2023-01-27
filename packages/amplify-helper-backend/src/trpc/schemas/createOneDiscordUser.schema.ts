import { z } from 'zod'
import { DiscordUserSelectObjectSchema } from './objects/DiscordUserSelect.schema'
import { DiscordUserIncludeObjectSchema } from './objects/DiscordUserInclude.schema'
import { DiscordUserCreateInputObjectSchema } from './objects/DiscordUserCreateInput.schema'
import { DiscordUserUncheckedCreateInputObjectSchema } from './objects/DiscordUserUncheckedCreateInput.schema'

export const DiscordUserCreateOneSchema = z.object({
  select: DiscordUserSelectObjectSchema.optional(),
  include: DiscordUserIncludeObjectSchema.optional(),
  data: z.union([
    DiscordUserCreateInputObjectSchema,
    DiscordUserUncheckedCreateInputObjectSchema,
  ]),
})
