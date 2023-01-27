import { z } from 'zod'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'
import { EventScheduleCreateWithoutGuildInputObjectSchema } from './EventScheduleCreateWithoutGuildInput.schema'
import { EventScheduleUncheckedCreateWithoutGuildInputObjectSchema } from './EventScheduleUncheckedCreateWithoutGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleCreateOrConnectWithoutGuildInput> = z
  .object({
    where: z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EventScheduleCreateWithoutGuildInputObjectSchema),
      z.lazy(() => EventScheduleUncheckedCreateWithoutGuildInputObjectSchema),
    ]),
  })
  .strict()

export const EventScheduleCreateOrConnectWithoutGuildInputObjectSchema = Schema
