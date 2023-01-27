import { z } from 'zod'
import { DiscordUserWhereInputObjectSchema } from './objects/DiscordUserWhereInput.schema'

export const DiscordUserDeleteManySchema = z.object({
  where: DiscordUserWhereInputObjectSchema.optional(),
})
