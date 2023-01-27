import { z } from 'zod'
import { EventScheduleCreateWithoutCreatedByInputObjectSchema } from './EventScheduleCreateWithoutCreatedByInput.schema'
import { EventScheduleUncheckedCreateWithoutCreatedByInputObjectSchema } from './EventScheduleUncheckedCreateWithoutCreatedByInput.schema'
import { EventScheduleCreateOrConnectWithoutCreatedByInputObjectSchema } from './EventScheduleCreateOrConnectWithoutCreatedByInput.schema'
import { EventScheduleCreateManyCreatedByInputEnvelopeObjectSchema } from './EventScheduleCreateManyCreatedByInputEnvelope.schema'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleCreateNestedManyWithoutCreatedByInput> =
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
      createMany: z
        .lazy(() => EventScheduleCreateManyCreatedByInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
          z.lazy(() => EventScheduleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const EventScheduleCreateNestedManyWithoutCreatedByInputObjectSchema = Schema
