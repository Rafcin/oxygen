import { z } from 'zod'
import { EventScheduleCreateWithoutCreatedByInputObjectSchema } from './EventScheduleCreateWithoutCreatedByInput.schema'
import { EventScheduleUncheckedCreateWithoutCreatedByInputObjectSchema } from './EventScheduleUncheckedCreateWithoutCreatedByInput.schema'
import { EventScheduleCreateOrConnectWithoutCreatedByInputObjectSchema } from './EventScheduleCreateOrConnectWithoutCreatedByInput.schema'
import { EventScheduleUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './EventScheduleUpsertWithWhereUniqueWithoutCreatedByInput.schema'
import { EventScheduleCreateManyCreatedByInputEnvelopeObjectSchema } from './EventScheduleCreateManyCreatedByInputEnvelope.schema'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'
import { EventScheduleUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './EventScheduleUpdateWithWhereUniqueWithoutCreatedByInput.schema'
import { EventScheduleUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './EventScheduleUpdateManyWithWhereWithoutCreatedByInput.schema'
import { EventScheduleScalarWhereInputObjectSchema } from './EventScheduleScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleUncheckedUpdateManyWithoutCreatedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EventScheduleCreateWithoutCreatedByInputObjectSchema),
          z.lazy(() => EventScheduleCreateWithoutCreatedByInputObjectSchema).array(),
          z.lazy(
            () => EventScheduleUncheckedCreateWithoutCreatedByInputObjectSchema
          ),
          z
            .lazy(
              () => EventScheduleUncheckedCreateWithoutCreatedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => EventScheduleCreateOrConnectWithoutCreatedByInputObjectSchema
          ),
          z
            .lazy(
              () => EventScheduleCreateOrConnectWithoutCreatedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => EventScheduleUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                EventScheduleUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EventScheduleCreateManyCreatedByInputEnvelopeObjectSchema)
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
            () => EventScheduleUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                EventScheduleUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => EventScheduleUpdateManyWithWhereWithoutCreatedByInputObjectSchema
          ),
          z
            .lazy(
              () => EventScheduleUpdateManyWithWhereWithoutCreatedByInputObjectSchema
            )
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

export const EventScheduleUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema =
  Schema
