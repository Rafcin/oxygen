import { z } from 'zod'
import { DiscordEventAttendeeCreateManyInputObjectSchema } from './objects/DiscordEventAttendeeCreateManyInput.schema'

export const DiscordEventAttendeeCreateManySchema = z.object({
  data: z.union([
    DiscordEventAttendeeCreateManyInputObjectSchema,
    z.array(DiscordEventAttendeeCreateManyInputObjectSchema),
  ]),
})
