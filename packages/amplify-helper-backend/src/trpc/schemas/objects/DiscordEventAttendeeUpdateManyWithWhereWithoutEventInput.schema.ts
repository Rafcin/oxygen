import { z } from 'zod'
import { DiscordEventAttendeeScalarWhereInputObjectSchema } from './DiscordEventAttendeeScalarWhereInput.schema'
import { DiscordEventAttendeeUpdateManyMutationInputObjectSchema } from './DiscordEventAttendeeUpdateManyMutationInput.schema'
import { DiscordEventAttendeeUncheckedUpdateManyWithoutAttendeesInputObjectSchema } from './DiscordEventAttendeeUncheckedUpdateManyWithoutAttendeesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUpdateManyWithWhereWithoutEventInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventAttendeeScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DiscordEventAttendeeUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            DiscordEventAttendeeUncheckedUpdateManyWithoutAttendeesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordEventAttendeeUpdateManyWithWhereWithoutEventInputObjectSchema =
  Schema
