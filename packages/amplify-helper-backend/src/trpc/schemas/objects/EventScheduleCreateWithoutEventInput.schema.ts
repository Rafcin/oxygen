import { z } from 'zod'
import { GuildCreateNestedOneWithoutEventScheduleInputObjectSchema } from './GuildCreateNestedOneWithoutEventScheduleInput.schema'
import { DiscordUserCreateNestedOneWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserCreateNestedOneWithoutCreatedSchedulesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleCreateWithoutEventInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    guild: z.lazy(() => GuildCreateNestedOneWithoutEventScheduleInputObjectSchema),
    createdBy: z.lazy(
      () => DiscordUserCreateNestedOneWithoutCreatedSchedulesInputObjectSchema
    ),
    schedule: z.string(),
  })
  .strict()

export const EventScheduleCreateWithoutEventInputObjectSchema = Schema
