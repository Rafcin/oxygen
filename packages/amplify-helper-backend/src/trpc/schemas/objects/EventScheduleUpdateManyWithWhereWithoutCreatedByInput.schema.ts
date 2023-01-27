import { z } from 'zod'
import { EventScheduleScalarWhereInputObjectSchema } from './EventScheduleScalarWhereInput.schema'
import { EventScheduleUpdateManyMutationInputObjectSchema } from './EventScheduleUpdateManyMutationInput.schema'
import { EventScheduleUncheckedUpdateManyWithoutCreatedSchedulesInputObjectSchema } from './EventScheduleUncheckedUpdateManyWithoutCreatedSchedulesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleUpdateManyWithWhereWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => EventScheduleScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => EventScheduleUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            EventScheduleUncheckedUpdateManyWithoutCreatedSchedulesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const EventScheduleUpdateManyWithWhereWithoutCreatedByInputObjectSchema =
  Schema
