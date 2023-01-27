import { z } from 'zod'
import { DiscordUserCreateManyInputObjectSchema } from './objects/DiscordUserCreateManyInput.schema'

export const DiscordUserCreateManySchema = z.object({
  data: z.union([
    DiscordUserCreateManyInputObjectSchema,
    z.array(DiscordUserCreateManyInputObjectSchema),
  ]),
})
