import { z } from 'zod'
import { DiscordEventAttendeeSelectObjectSchema } from './objects/DiscordEventAttendeeSelect.schema'
import { DiscordEventAttendeeIncludeObjectSchema } from './objects/DiscordEventAttendeeInclude.schema'
import { DiscordEventAttendeeCreateInputObjectSchema } from './objects/DiscordEventAttendeeCreateInput.schema'
import { DiscordEventAttendeeUncheckedCreateInputObjectSchema } from './objects/DiscordEventAttendeeUncheckedCreateInput.schema'

export const DiscordEventAttendeeCreateOneSchema = z.object({
  select: DiscordEventAttendeeSelectObjectSchema.optional(),
  include: DiscordEventAttendeeIncludeObjectSchema.optional(),
  data: z.union([
    DiscordEventAttendeeCreateInputObjectSchema,
    DiscordEventAttendeeUncheckedCreateInputObjectSchema,
  ]),
})
