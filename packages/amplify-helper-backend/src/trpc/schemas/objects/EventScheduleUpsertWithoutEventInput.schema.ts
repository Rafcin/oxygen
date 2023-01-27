import { z } from 'zod'
import { EventScheduleUpdateWithoutEventInputObjectSchema } from './EventScheduleUpdateWithoutEventInput.schema'
import { EventScheduleUncheckedUpdateWithoutEventInputObjectSchema } from './EventScheduleUncheckedUpdateWithoutEventInput.schema'
import { EventScheduleCreateWithoutEventInputObjectSchema } from './EventScheduleCreateWithoutEventInput.schema'
import { EventScheduleUncheckedCreateWithoutEventInputObjectSchema } from './EventScheduleUncheckedCreateWithoutEventInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleUpsertWithoutEventInput> = z
  .object({
    update: z.union([
      z.lazy(() => EventScheduleUpdateWithoutEventInputObjectSchema),
      z.lazy(() => EventScheduleUncheckedUpdateWithoutEventInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EventScheduleCreateWithoutEventInputObjectSchema),
      z.lazy(() => EventScheduleUncheckedCreateWithoutEventInputObjectSchema),
    ]),
  })
  .strict()

export const EventScheduleUpsertWithoutEventInputObjectSchema = Schema
