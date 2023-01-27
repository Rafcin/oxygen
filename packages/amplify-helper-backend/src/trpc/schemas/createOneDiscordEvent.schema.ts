import { z } from 'zod'
import { DiscordEventSelectObjectSchema } from './objects/DiscordEventSelect.schema'
import { DiscordEventIncludeObjectSchema } from './objects/DiscordEventInclude.schema'
import { DiscordEventCreateInputObjectSchema } from './objects/DiscordEventCreateInput.schema'
import { DiscordEventUncheckedCreateInputObjectSchema } from './objects/DiscordEventUncheckedCreateInput.schema'

export const DiscordEventCreateOneSchema = z.object({
  select: DiscordEventSelectObjectSchema.optional(),
  include: DiscordEventIncludeObjectSchema.optional(),
  data: z.union([
    DiscordEventCreateInputObjectSchema,
    DiscordEventUncheckedCreateInputObjectSchema,
  ]),
})
