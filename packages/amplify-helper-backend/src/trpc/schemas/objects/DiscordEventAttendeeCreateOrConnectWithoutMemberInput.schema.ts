import { z } from 'zod'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './DiscordEventAttendeeWhereUniqueInput.schema'
import { DiscordEventAttendeeCreateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeCreateWithoutMemberInput.schema'
import { DiscordEventAttendeeUncheckedCreateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateWithoutMemberInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeCreateOrConnectWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiscordEventAttendeeCreateWithoutMemberInputObjectSchema),
        z.lazy(
          () => DiscordEventAttendeeUncheckedCreateWithoutMemberInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordEventAttendeeCreateOrConnectWithoutMemberInputObjectSchema =
  Schema
