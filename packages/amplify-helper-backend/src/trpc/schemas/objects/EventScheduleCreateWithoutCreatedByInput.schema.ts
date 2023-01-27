import { z } from 'zod'
import { GuildCreateNestedOneWithoutEventScheduleInputObjectSchema } from './GuildCreateNestedOneWithoutEventScheduleInput.schema'
import { DiscordEventCreateNestedManyWithoutScheduleInputObjectSchema } from './DiscordEventCreateNestedManyWithoutScheduleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleCreateWithoutCreatedByInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    guild: z.lazy(() => GuildCreateNestedOneWithoutEventScheduleInputObjectSchema),
    event: z
      .lazy(() => DiscordEventCreateNestedManyWithoutScheduleInputObjectSchema)
      .optional(),
    schedule: z.string(),
  })
  .strict()

export const EventScheduleCreateWithoutCreatedByInputObjectSchema = Schema
