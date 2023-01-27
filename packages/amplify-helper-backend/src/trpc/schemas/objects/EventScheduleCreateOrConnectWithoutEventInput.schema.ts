import { z } from 'zod'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'
import { EventScheduleCreateWithoutEventInputObjectSchema } from './EventScheduleCreateWithoutEventInput.schema'
import { EventScheduleUncheckedCreateWithoutEventInputObjectSchema } from './EventScheduleUncheckedCreateWithoutEventInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleCreateOrConnectWithoutEventInput> = z
  .object({
    where: z.lazy(() => EventScheduleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EventScheduleCreateWithoutEventInputObjectSchema),
      z.lazy(() => EventScheduleUncheckedCreateWithoutEventInputObjectSchema),
    ]),
  })
  .strict()

export const EventScheduleCreateOrConnectWithoutEventInputObjectSchema = Schema
