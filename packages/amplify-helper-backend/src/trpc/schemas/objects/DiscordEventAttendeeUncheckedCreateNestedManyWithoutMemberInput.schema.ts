import { z } from 'zod'
import { DiscordEventAttendeeCreateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeCreateWithoutMemberInput.schema'
import { DiscordEventAttendeeUncheckedCreateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateWithoutMemberInput.schema'
import { DiscordEventAttendeeCreateOrConnectWithoutMemberInputObjectSchema } from './DiscordEventAttendeeCreateOrConnectWithoutMemberInput.schema'
import { DiscordEventAttendeeCreateManyMemberInputEnvelopeObjectSchema } from './DiscordEventAttendeeCreateManyMemberInputEnvelope.schema'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './DiscordEventAttendeeWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUncheckedCreateNestedManyWithoutMemberInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordEventAttendeeCreateWithoutMemberInputObjectSchema),
          z
            .lazy(() => DiscordEventAttendeeCreateWithoutMemberInputObjectSchema)
            .array(),
          z.lazy(
            () => DiscordEventAttendeeUncheckedCreateWithoutMemberInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordEventAttendeeUncheckedCreateWithoutMemberInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiscordEventAttendeeCreateOrConnectWithoutMemberInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordEventAttendeeCreateOrConnectWithoutMemberInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiscordEventAttendeeCreateManyMemberInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const DiscordEventAttendeeUncheckedCreateNestedManyWithoutMemberInputObjectSchema =
  Schema
