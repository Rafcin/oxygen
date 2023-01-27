import { z } from 'zod'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './DiscordEventAttendeeWhereUniqueInput.schema'
import { DiscordEventAttendeeCreateWithoutEventInputObjectSchema } from './DiscordEventAttendeeCreateWithoutEventInput.schema'
import { DiscordEventAttendeeUncheckedCreateWithoutEventInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateWithoutEventInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeCreateOrConnectWithoutEventInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiscordEventAttendeeCreateWithoutEventInputObjectSchema),
        z.lazy(
          () => DiscordEventAttendeeUncheckedCreateWithoutEventInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordEventAttendeeCreateOrConnectWithoutEventInputObjectSchema =
  Schema
