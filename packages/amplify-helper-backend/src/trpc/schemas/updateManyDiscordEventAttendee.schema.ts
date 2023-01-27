import { z } from 'zod'
import { DiscordEventAttendeeUpdateManyMutationInputObjectSchema } from './objects/DiscordEventAttendeeUpdateManyMutationInput.schema'
import { DiscordEventAttendeeWhereInputObjectSchema } from './objects/DiscordEventAttendeeWhereInput.schema'

export const DiscordEventAttendeeUpdateManySchema = z.object({
  data: DiscordEventAttendeeUpdateManyMutationInputObjectSchema,
  where: DiscordEventAttendeeWhereInputObjectSchema.optional(),
})
