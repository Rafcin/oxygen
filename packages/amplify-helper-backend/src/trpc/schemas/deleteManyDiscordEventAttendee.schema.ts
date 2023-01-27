import { z } from 'zod'
import { DiscordEventAttendeeWhereInputObjectSchema } from './objects/DiscordEventAttendeeWhereInput.schema'

export const DiscordEventAttendeeDeleteManySchema = z.object({
  where: DiscordEventAttendeeWhereInputObjectSchema.optional(),
})
