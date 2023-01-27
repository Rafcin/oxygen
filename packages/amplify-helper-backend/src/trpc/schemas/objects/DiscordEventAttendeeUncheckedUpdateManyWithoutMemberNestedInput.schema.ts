import { z } from 'zod'
import { DiscordEventAttendeeCreateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeCreateWithoutMemberInput.schema'
import { DiscordEventAttendeeUncheckedCreateWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateWithoutMemberInput.schema'
import { DiscordEventAttendeeCreateOrConnectWithoutMemberInputObjectSchema } from './DiscordEventAttendeeCreateOrConnectWithoutMemberInput.schema'
import { DiscordEventAttendeeUpsertWithWhereUniqueWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUpsertWithWhereUniqueWithoutMemberInput.schema'
import { DiscordEventAttendeeCreateManyMemberInputEnvelopeObjectSchema } from './DiscordEventAttendeeCreateManyMemberInputEnvelope.schema'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './DiscordEventAttendeeWhereUniqueInput.schema'
import { DiscordEventAttendeeUpdateWithWhereUniqueWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUpdateWithWhereUniqueWithoutMemberInput.schema'
import { DiscordEventAttendeeUpdateManyWithWhereWithoutMemberInputObjectSchema } from './DiscordEventAttendeeUpdateManyWithWhereWithoutMemberInput.schema'
import { DiscordEventAttendeeScalarWhereInputObjectSchema } from './DiscordEventAttendeeScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUncheckedUpdateManyWithoutMemberNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              DiscordEventAttendeeUpsertWithWhereUniqueWithoutMemberInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordEventAttendeeUpsertWithWhereUniqueWithoutMemberInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiscordEventAttendeeCreateManyMemberInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema),
          z.lazy(() => DiscordEventAttendeeWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              DiscordEventAttendeeUpdateWithWhereUniqueWithoutMemberInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordEventAttendeeUpdateWithWhereUniqueWithoutMemberInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              DiscordEventAttendeeUpdateManyWithWhereWithoutMemberInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordEventAttendeeUpdateManyWithWhereWithoutMemberInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DiscordEventAttendeeScalarWhereInputObjectSchema),
          z.lazy(() => DiscordEventAttendeeScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const DiscordEventAttendeeUncheckedUpdateManyWithoutMemberNestedInputObjectSchema =
  Schema
