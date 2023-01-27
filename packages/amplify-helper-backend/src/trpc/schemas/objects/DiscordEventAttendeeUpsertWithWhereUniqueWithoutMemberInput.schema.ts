import { z } from 'zod'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './DiscordEventAttendeeWhereUniqueInput.schema'
import { DiscordEventAttendeeUpdateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUpdateWithoutMemberInput.schema'
import { DiscordEventAttendeeUncheckedUpdateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUncheckedUpdateWithoutMemberInput.schema'
import { DiscordEventAttendeeCreateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeCreateWithoutMemberInput.schema'
import { DiscordEventAttendeeUncheckedCreateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateWithoutMemberInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUpsertWithWhereUniqueWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiscordEventAttendeeUpdateWithoutMemberInputObjectSchema),
        z.lazy(
          () => DiscordEventAttendeeUncheckedUpdateWithoutMemberInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => DiscordEventAttendeeCreateWithoutMemberInputObjectSchema),
        z.lazy(
          () => DiscordEventAttendeeUncheckedCreateWithoutMemberInputObjectSchema
        ),
      ]),
    })
    .strict()

export const DiscordEventAttendeeUpsertWithWhereUniqueWithoutMemberInputObjectSchema =
  Schema
