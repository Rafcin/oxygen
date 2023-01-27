import { z } from 'zod'
import { DiscordUserSelectObjectSchema } from './objects/DiscordUserSelect.schema'
import { DiscordUserIncludeObjectSchema } from './objects/DiscordUserInclude.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './objects/DiscordUserWhereUniqueInput.schema'

export const DiscordUserDeleteOneSchema = z.object({
  select: DiscordUserSelectObjectSchema.optional(),
  include: DiscordUserIncludeObjectSchema.optional(),
  where: DiscordUserWhereUniqueInputObjectSchema,
})
