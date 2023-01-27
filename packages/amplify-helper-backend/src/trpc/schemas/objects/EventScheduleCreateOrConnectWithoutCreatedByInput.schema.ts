import { z } from 'zod'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'
import { EventScheduleCreateWithoutCreatedByInputObjectSchema } from './EventScheduleCreateWithoutCreatedByInput.schema'
import { EventScheduleUncheckedCreateWithoutCreatedByInputObjectSchema } from './EventScheduleUncheckedCreateWithoutCreatedByInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleCreateOrConnectWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EventScheduleCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => EventScheduleUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict()

export const EventScheduleCreateOrConnectWithoutCreatedByInputObjectSchema = Schema
