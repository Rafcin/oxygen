import { z } from 'zod'
import { DiscordEventAttendeeSelectObjectSchema } from './objects/DiscordEventAttendeeSelect.schema'
import { DiscordEventAttendeeIncludeObjectSchema } from './objects/DiscordEventAttendeeInclude.schema'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './objects/DiscordEventAttendeeWhereUniqueInput.schema'

export const DiscordEventAttendeeFindUniqueSchema = z.object({
  select: DiscordEventAttendeeSelectObjectSchema.optional(),
  include: DiscordEventAttendeeIncludeObjectSchema.optional(),
  where: DiscordEventAttendeeWhereUniqueInputObjectSchema,
})
