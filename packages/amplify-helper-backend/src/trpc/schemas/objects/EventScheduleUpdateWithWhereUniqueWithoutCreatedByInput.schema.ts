import { z } from 'zod'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'
import { EventScheduleUpdateWithoutCreatedByInputObjectSchema } from './EventScheduleUpdateWithoutCreatedByInput.schema'
import { EventScheduleUncheckedUpdateWithoutCreatedByInputObjectSchema } from './EventScheduleUncheckedUpdateWithoutCreatedByInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleUpdateWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EventScheduleUpdateWithoutCreatedByInputObjectSchema),
        z.lazy(() => EventScheduleUncheckedUpdateWithoutCreatedByInputObjectSchema),
      ]),
    })
    .strict()

export const EventScheduleUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema
