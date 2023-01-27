import { z } from 'zod'
import { DiscordEventAttendeeSelectObjectSchema } from './objects/DiscordEventAttendeeSelect.schema'
import { DiscordEventAttendeeIncludeObjectSchema } from './objects/DiscordEventAttendeeInclude.schema'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './objects/DiscordEventAttendeeWhereUniqueInput.schema'
import { DiscordEventAttendeeCreateInputObjectSchema } from './objects/DiscordEventAttendeeCreateInput.schema'
import { DiscordEventAttendeeUncheckedCreateInputObjectSchema } from './objects/DiscordEventAttendeeUncheckedCreateInput.schema'
import { DiscordEventAttendeeUpdateInputObjectSchema } from './objects/DiscordEventAttendeeUpdateInput.schema'
import { DiscordEventAttendeeUncheckedUpdateInputObjectSchema } from './objects/DiscordEventAttendeeUncheckedUpdateInput.schema'

export const DiscordEventAttendeeUpsertSchema = z.object({
  select: DiscordEventAttendeeSelectObjectSchema.optional(),
  include: DiscordEventAttendeeIncludeObjectSchema.optional(),
  where: DiscordEventAttendeeWhereUniqueInputObjectSchema,
  create: z.union([
    DiscordEventAttendeeCreateInputObjectSchema,
    DiscordEventAttendeeUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DiscordEventAttendeeUpdateInputObjectSchema,
    DiscordEventAttendeeUncheckedUpdateInputObjectSchema,
  ]),
})
