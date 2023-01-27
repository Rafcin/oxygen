import { z } from 'zod'
import { GuildCreateNestedOneWithoutEventScheduleInputObjectSchema } from './GuildCreateNestedOneWithoutEventScheduleInput.schema'
import { DiscordUserCreateNestedOneWithoutCreatedSchedulesInputObjectSchema } from './DiscordUserCreateNestedOneWithoutCreatedSchedulesInput.schema'
import { DiscordEventCreateNestedManyWithoutScheduleInputObjectSchema } from './DiscordEventCreateNestedManyWithoutScheduleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    guild: z.lazy(() => GuildCreateNestedOneWithoutEventScheduleInputObjectSchema),
    createdBy: z.lazy(
      () => DiscordUserCreateNestedOneWithoutCreatedSchedulesInputObjectSchema
    ),
    event: z
      .lazy(() => DiscordEventCreateNestedManyWithoutScheduleInputObjectSchema)
      .optional(),
    schedule: z.string(),
  })
  .strict()

export const EventScheduleCreateInputObjectSchema = Schema
