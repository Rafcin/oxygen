import { z } from 'zod'
import { DiscordEventAttendeeCreateWithoutEventInputObjectSchema } from './DiscordEventAttendeeCreateWithoutEventInput.schema'
import { DiscordEventAttendeeUncheckedCreateWithoutEventInputObjectSchema } from './DiscordEventAttendeeUncheckedCreateWithoutEventInput.schema'
import { DiscordEventAttendeeCreateOrConnectWithoutEventInputObjectSchema } from './DiscordEventAttendeeCreateOrConnectWithoutEventInput.schema'
import { DiscordEventAttendeeUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './DiscordEventAttendeeUpsertWithWhereUniqueWithoutEventInput.schema'
import { DiscordEventAttendeeCreateManyEventInputEnvelopeObjectSchema } from './DiscordEventAttendeeCreateManyEventInputEnvelope.schema'
import { DiscordEventAttendeeWhereUniqueInputObjectSchema } from './DiscordEventAttendeeWhereUniqueInput.schema'
import { DiscordEventAttendeeUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './DiscordEventAttendeeUpdateWithWhereUniqueWithoutEventInput.schema'
import { DiscordEventAttendeeUpdateManyWithWhereWithoutEventInputObjectSchema } from './DiscordEventAttendeeUpdateManyWithWhereWithoutEventInput.schema'
import { DiscordEventAttendeeScalarWhereInputObjectSchema } from './DiscordEventAttendeeScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeUpdateManyWithoutEventNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordEventAttendeeCreateWithoutEventInputObjectSchema),
          z
            .lazy(() => DiscordEventAttendeeCreateWithoutEventInputObjectSchema)
            .array(),
          z.lazy(
            () => DiscordEventAttendeeUncheckedCreateWithoutEventInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordEventAttendeeUncheckedCreateWithoutEventInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiscordEventAttendeeCreateOrConnectWithoutEventInputObjectSchema
          ),
          z
            .lazy(
              () => DiscordEventAttendeeCreateOrConnectWithoutEventInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              DiscordEventAttendeeUpsertWithWhereUniqueWithoutEventInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordEventAttendeeUpsertWithWhereUniqueWithoutEventInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiscordEventAttendeeCreateManyEventInputEnvelopeObjectSchema)
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
              DiscordEventAttendeeUpdateWithWhereUniqueWithoutEventInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordEventAttendeeUpdateWithWhereUniqueWithoutEventInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              DiscordEventAttendeeUpdateManyWithWhereWithoutEventInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiscordEventAttendeeUpdateManyWithWhereWithoutEventInputObjectSchema
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

export const DiscordEventAttendeeUpdateManyWithoutEventNestedInputObjectSchema =
  Schema
