import { z } from 'zod'
import { DiscordEventWhereInputObjectSchema } from './objects/DiscordEventWhereInput.schema'

export const DiscordEventDeleteManySchema = z.object({
  where: DiscordEventWhereInputObjectSchema.optional(),
})
