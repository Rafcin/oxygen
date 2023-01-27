import { z } from 'zod'
import { DiscordEventAttendeeSelectObjectSchema } from './objects/DiscordEventAttendeeSelect.schema'
import { DiscordEventAttendeeIncludeObjectSchema } from './objects/DiscordEventAttendeeInclude.schema'
import { DiscordEventAttendeeUpdateInputObjectSchema } from './objects/DiscordEventAttendeeUpdateInput.schema'
import { DiscordEventAttendeeUncheckedUpdateInputObjectSchema } from './objects/DiscordEventAttendeeUncheckedUpdateInput.schema'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './objects/DiscordEventAttendeeWhereUniqueInput.schema'

export const DiscordEventAttendeeUpdateOneSchema = z.object({
  select: DiscordEventAttendeeSelectObjectSchema.optional(),
  include: DiscordEventAttendeeIncludeObjectSchema.optional(),
  data: z.union([
    DiscordEventAttendeeUpdateInputObjectSchema,
    DiscordEventAttendeeUncheckedUpdateInputObjectSchema,
  ]),
  where: DiscordEventAttendeeWhereUniqueInputObjectSchema,
})
