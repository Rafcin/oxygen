import { z } from 'zod'
import { DiscordEventUpdateManyMutationInputObjectSchema } from './objects/DiscordEventUpdateManyMutationInput.schema'
import { DiscordEventWhereInputObjectSchema } from './objects/DiscordEventWhereInput.schema'

export const DiscordEventUpdateManySchema = z.object({
  data: DiscordEventUpdateManyMutationInputObjectSchema,
  where: DiscordEventWhereInputObjectSchema.optional(),
})
