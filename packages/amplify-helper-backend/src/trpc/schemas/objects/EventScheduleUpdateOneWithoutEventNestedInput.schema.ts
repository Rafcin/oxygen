import { z } from 'zod'
import { EventScheduleCreateWithoutEventInputObjectSchema } from './EventScheduleCreateWithoutEventInput.schema'
import { EventScheduleUncheckedCreateWithoutEventInputObjectSchema } from './EventScheduleUncheckedCreateWithoutEventInput.schema'
import { EventScheduleCreateOrConnectWithoutEventInputObjectSchema } from './EventScheduleCreateOrConnectWithoutEventInput.schema'
import { EventScheduleUpsertWithoutEventInputObjectSchema } from './EventScheduleUpsertWithoutEventInput.schema'
import { EventScheduleWhereUniqueInputObjectSchema } from './EventScheduleWhereUniqueInput.schema'
import { EventScheduleUpdateWithoutEventInputObjectSchema } from './EventScheduleUpdateWithoutEventInput.schema'
import { EventScheduleUncheckedUpdateWithoutEventInputObjectSchema } from './EventScheduleUncheckedUpdateWithoutEventInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleUpdateOneWithoutEventNestedInput> = z
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
    upsert: z
      .lazy(() => EventScheduleUpsertWithoutEventInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => EventScheduleWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => EventScheduleUpdateWithoutEventInputObjectSchema),
        z.lazy(() => EventScheduleUncheckedUpdateWithoutEventInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const EventScheduleUpdateOneWithoutEventNestedInputObjectSchema = Schema
