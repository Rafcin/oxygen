import { z } from 'zod'
import { DiscordUserSelectObjectSchema } from './objects/DiscordUserSelect.schema'
import { DiscordUserIncludeObjectSchema } from './objects/DiscordUserInclude.schema'
import { DiscordUserUpdateInputObjectSchema } from './objects/DiscordUserUpdateInput.schema'
import { DiscordUserUncheckedUpdateInputObjectSchema } from './objects/DiscordUserUncheckedUpdateInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './objects/DiscordUserWhereUniqueInput.schema'

export const DiscordUserUpdateOneSchema = z.object({
  select: DiscordUserSelectObjectSchema.optional(),
  include: DiscordUserIncludeObjectSchema.optional(),
  data: z.union([
    DiscordUserUpdateInputObjectSchema,
    DiscordUserUncheckedUpdateInputObjectSchema,
  ]),
  where: DiscordUserWhereUniqueInputObjectSchema,
})
