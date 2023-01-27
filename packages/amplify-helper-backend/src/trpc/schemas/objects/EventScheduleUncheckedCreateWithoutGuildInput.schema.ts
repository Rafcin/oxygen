import { z } from 'zod'
import { DiscordEventUncheckedCreateNestedManyWithoutScheduleInputObjectSchema } from './DiscordEventUncheckedCreateNestedManyWithoutScheduleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleUncheckedCreateWithoutGuildInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    createdById: z.string(),
    event: z
      .lazy(
        () => DiscordEventUncheckedCreateNestedManyWithoutScheduleInputObjectSchema
      )
      .optional(),
    schedule: z.string(),
  })
  .strict()

export const EventScheduleUncheckedCreateWithoutGuildInputObjectSchema = Schema
