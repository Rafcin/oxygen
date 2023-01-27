import { z } from 'zod'
import { DiscordEventCreateWithoutScheduleInputObjectSchema } from './DiscordEventCreateWithoutScheduleInput.schema'
import { DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema } from './DiscordEventUncheckedCreateWithoutScheduleInput.schema'
import { DiscordEventCreateOrConnectWithoutScheduleInputObjectSchema } from './DiscordEventCreateOrConnectWithoutScheduleInput.schema'
import { DiscordEventUpsertWithWhereUniqueWithoutScheduleInputObjectSchema } from './DiscordEventUpsertWithWhereUniqueWithoutScheduleInput.schema'
import { DiscordEventCreateManyScheduleInputEnvelopeObjectSchema } from './DiscordEventCreateManyScheduleInputEnvelope.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './DiscordEventWhereUniqueInput.schema'
import { DiscordEventUpdateWithWhereUniqueWithoutScheduleInputObjectSchema } from './DiscordEventUpdateWithWhereUniqueWithoutScheduleInput.schema'
import { DiscordEventUpdateManyWithWhereWithoutScheduleInputObjectSchema } from './DiscordEventUpdateManyWithWhereWithoutScheduleInput.schema'
import { DiscordEventScalarWhereInputObjectSchema } from './DiscordEventScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventUpdateManyWithoutScheduleNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiscordEventCreateWithoutScheduleInputObjectSchema),
        z.lazy(() => DiscordEventCreateWithoutScheduleInputObjectSchema).array(),
        z.lazy(() => DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema),
        z
          .lazy(() => DiscordEventUncheckedCreateWithoutScheduleInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DiscordEventCreateOrConnectWithoutScheduleInputObjectSchema),
        z
          .lazy(() => DiscordEventCreateOrConnectWithoutScheduleInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => DiscordEventUpsertWithWhereUniqueWithoutScheduleInputObjectSchema
        ),
        z
          .lazy(
            () => DiscordEventUpsertWithWhereUniqueWithoutScheduleInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => DiscordEventCreateManyScheduleInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema),
        z.lazy(() => DiscordEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => DiscordEventUpdateWithWhereUniqueWithoutScheduleInputObjectSchema
        ),
        z
          .lazy(
            () => DiscordEventUpdateWithWhereUniqueWithoutScheduleInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => DiscordEventUpdateManyWithWhereWithoutScheduleInputObjectSchema
        ),
        z
          .lazy(
            () => DiscordEventUpdateManyWithWhereWithoutScheduleInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => DiscordEventScalarWhereInputObjectSchema),
        z.lazy(() => DiscordEventScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const DiscordEventUpdateManyWithoutScheduleNestedInputObjectSchema = Schema
