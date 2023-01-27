import { z } from 'zod'
import { DiscordUserUpdateManyMutationInputObjectSchema } from './objects/DiscordUserUpdateManyMutationInput.schema'
import { DiscordUserWhereInputObjectSchema } from './objects/DiscordUserWhereInput.schema'

export const DiscordUserUpdateManySchema = z.object({
  data: DiscordUserUpdateManyMutationInputObjectSchema,
  where: DiscordUserWhereInputObjectSchema.optional(),
})
