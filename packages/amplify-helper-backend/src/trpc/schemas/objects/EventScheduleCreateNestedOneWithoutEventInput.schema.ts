import { z } from 'zod'
import { EventScheduleCreateWithoutEventInputObjectSchema } from './EventScheduleCreateWithoutEventInput.schema'
import { EventScheduleUncheckedCreateWithoutEventInputObjectSchema } from './EventScheduleUncheckedCreateWithoutEventInput.schema'
import { EventScheduleCreateOrConnectWithoutEventInputObjectSchema } from './EventScheduleCreateOrConnectWithoutEventInput.schema'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleCreateNestedOneWithoutEventInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EventScheduleCreateWithoutEventInputObjectSchema),
        z.lazy(() => EventScheduleUncheckedCreateWithoutEventInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => EventScheduleCreateOrConnectWithoutEventInputObjectSchema)
      .optional(),
    connect: z.lazy(() => EventScheduleWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const EventScheduleCreateNestedOneWithoutEventInputObjectSchema = Schema
