import { z } from 'zod'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'
import { EventScheduleUpdateWithoutGuildInputObjectSchema } from './EventScheduleUpdateWithoutGuildInput.schema'
import { EventScheduleUncheckedUpdateWithoutGuildInputObjectSchema } from './EventScheduleUncheckedUpdateWithoutGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleUpdateWithWhereUniqueWithoutGuildInput> =
  z
    .object({
      where: z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EventScheduleUpdateWithoutGuildInputObjectSchema),
        z.lazy(() => EventScheduleUncheckedUpdateWithoutGuildInputObjectSchema),
      ]),
    })
    .strict()

export const EventScheduleUpdateWithWhereUniqueWithoutGuildInputObjectSchema = Schema
