import { z } from 'zod'
import { EventScheduleCreateWithoutGuildInputObjectSchema } from './EventScheduleCreateWithoutGuildInput.schema'
import { EventScheduleUncheckedCreateWithoutGuildInputObjectSchema } from './EventScheduleUncheckedCreateWithoutGuildInput.schema'
import { EventScheduleCreateOrConnectWithoutGuildInputObjectSchema } from './EventScheduleCreateOrConnectWithoutGuildInput.schema'
import { EventScheduleUpsertWithWhereUniqueWithoutGuildInputObjectSchema } from './EventScheduleUpsertWithWhereUniqueWithoutGuildInput.schema'
import { EventScheduleCreateManyGuildInputEnvelopeObjectSchema } from './EventScheduleCreateManyGuildInputEnvelope.schema'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'
import { EventScheduleUpdateWithWhereUniqueWithoutGuildInputObjectSchema } from './EventScheduleUpdateWithWhereUniqueWithoutGuildInput.schema'
import { EventScheduleUpdateManyWithWhereWithoutGuildInputObjectSchema } from './EventScheduleUpdateManyWithWhereWithoutGuildInput.schema'
import { EventScheduleScalarWhereInputObjectSchema } from './EventScheduleScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleUpdateManyWithoutGuildNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EventScheduleCreateWithoutGuildInputObjectSchema),
        z.lazy(() => EventScheduleCreateWithoutGuildInputObjectSchema).array(),
        z.lazy(() => EventScheduleUncheckedCreateWithoutGuildInputObjectSchema),
        z
          .lazy(() => EventScheduleUncheckedCreateWithoutGuildInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => EventScheduleCreateOrConnectWithoutGuildInputObjectSchema),
        z
          .lazy(() => EventScheduleCreateOrConnectWithoutGuildInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => EventScheduleUpsertWithWhereUniqueWithoutGuildInputObjectSchema
        ),
        z
          .lazy(
            () => EventScheduleUpsertWithWhereUniqueWithoutGuildInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => EventScheduleCreateManyGuildInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
        z.lazy(() => EventScheduleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
        z.lazy(() => EventScheduleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
        z.lazy(() => EventScheduleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
        z.lazy(() => EventScheduleWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => EventScheduleUpdateWithWhereUniqueWithoutGuildInputObjectSchema
        ),
        z
          .lazy(
            () => EventScheduleUpdateWithWhereUniqueWithoutGuildInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => EventScheduleUpdateManyWithWhereWithoutGuildInputObjectSchema),
        z
          .lazy(() => EventScheduleUpdateManyWithWhereWithoutGuildInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => EventScheduleScalarWhereInputObjectSchema),
        z.lazy(() => EventScheduleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const EventScheduleUpdateManyWithoutGuildNestedInputObjectSchema = Schema
