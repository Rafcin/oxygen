import { z } from 'zod'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './DiscordEventAttendeeWhereUniqueInput.schema'
import { DiscordEventAttendeeUpdateWithoutEventInputObjectSchema } from './DiscordEventAttendeeUpdateWithoutEventInput.schema'
import { DiscordEventAttendeeUncheckedUpdateWithoutEventInputObjectSchema } from './DiscordEventAttendeeUncheckedUpdateWithoutEventInput.schema'
import { DiscordEventAttendeeCreateWithoutEventInputObjectSchema } from './DiscordEventAttendeeCreateWithoutEventInput.schema'
import { DiscordEventAttendeeUncheckedCreateWithoutEventInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateWithoutEventInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUpsertWithWhereUniqueWithoutEventInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiscordEventAttendeeUpdateWithoutEventInputObjectSchema),
        z.lazy(
          () => DiscordEventAttendeeUncheckedUpdateWithoutEventInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => DiscordEventAttendeeCreateWithoutEventInputObjectSchema),
        z.lazy(
          () => DiscordEventAttendeeUncheckedCreateWithoutEventInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordEventAttendeeUpsertWithWhereUniqueWithoutEventInputObjectSchema =
  Schema
