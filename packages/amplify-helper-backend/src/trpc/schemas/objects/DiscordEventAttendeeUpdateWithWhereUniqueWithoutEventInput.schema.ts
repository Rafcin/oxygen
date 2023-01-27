import { z } from 'zod'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './DiscordEventAttendeeWhereUniqueInput.schema'
import { DiscordEventAttendeeUpdateWithoutEventInputObjectSchema } from './DiscordEventAttendeeUpdateWithoutEventInput.schema'
import { DiscordEventAttendeeUncheckedUpdateWithoutEventInputObjectSchema } from './DiscordEventAttendeeUncheckedUpdateWithoutEventInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUpdateWithWhereUniqueWithoutEventInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiscordEventAttendeeUpdateWithoutEventInputObjectSchema),
        z.lazy(
          () => DiscordEventAttendeeUncheckedUpdateWithoutEventInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordEventAttendeeUpdateWithWhereUniqueWithoutEventInputObjectSchema =
  Schema
