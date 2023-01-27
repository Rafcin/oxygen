import { z } from 'zod'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'
import { EventScheduleUpdateWithoutCreatedByInputObjectSchema } from './EventScheduleUpdateWithoutCreatedByInput.schema'
import { EventScheduleUncheckedUpdateWithoutCreatedByInputObjectSchema } from './EventScheduleUncheckedUpdateWithoutCreatedByInput.schema'
import { EventScheduleCreateWithoutCreatedByInputObjectSchema } from './EventScheduleCreateWithoutCreatedByInput.schema'
import { EventScheduleUncheckedCreateWithoutCreatedByInputObjectSchema } from './EventScheduleUncheckedCreateWithoutCreatedByInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleUpsertWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EventScheduleUpdateWithoutCreatedByInputObjectSchema),
        z.lazy(() => EventScheduleUncheckedUpdateWithoutCreatedByInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EventScheduleCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => EventScheduleUncheckedCreateWithoutCreatedByInputObjectSchema),
      ]),
    })
    .strict()

export const EventScheduleUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema
