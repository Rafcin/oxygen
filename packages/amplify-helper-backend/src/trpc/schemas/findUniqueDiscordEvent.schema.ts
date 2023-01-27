import { z } from 'zod'
import { DiscordEventSelectObjectSchema } from './objects/DiscordEventSelect.schema'
import { DiscordEventIncludeObjectSchema } from './objects/DiscordEventInclude.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './objects/DiscordEventWhereUniqueInput.schema'

export const DiscordEventFindUniqueSchema = z.object({
  select: DiscordEventSelectObjectSchema.optional(),
  include: DiscordEventIncludeObjectSchema.optional(),
  where: DiscordEventWhereUniqueInputObjectSchema,
})
