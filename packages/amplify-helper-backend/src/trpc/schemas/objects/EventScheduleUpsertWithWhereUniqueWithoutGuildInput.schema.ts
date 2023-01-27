import { z } from 'zod'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'
import { EventScheduleUpdateWithoutGuildInputObjectSchema } from './EventScheduleUpdateWithoutGuildInput.schema'
import { EventScheduleUncheckedUpdateWithoutGuildInputObjectSchema } from './EventScheduleUncheckedUpdateWithoutGuildInput.schema'
import { EventScheduleCreateWithoutGuildInputObjectSchema } from './EventScheduleCreateWithoutGuildInput.schema'
import { EventScheduleUncheckedCreateWithoutGuildInputObjectSchema } from './EventScheduleUncheckedCreateWithoutGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleUpsertWithWhereUniqueWithoutGuildInput> =
  z
    .object({
      where: z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EventScheduleUpdateWithoutGuildInputObjectSchema),
        z.lazy(() => EventScheduleUncheckedUpdateWithoutGuildInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EventScheduleCreateWithoutGuildInputObjectSchema),
        z.lazy(() => EventScheduleUncheckedCreateWithoutGuildInputObjectSchema),
      ]),
    })
    .strict()

export const EventScheduleUpsertWithWhereUniqueWithoutGuildInputObjectSchema = Schema
