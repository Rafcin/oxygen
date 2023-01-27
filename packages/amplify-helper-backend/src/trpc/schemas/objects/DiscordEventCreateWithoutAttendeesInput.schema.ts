import { z } from 'zod'
import { DiscordUserCreateNestedOneWithoutCreatedEventsInputObjectSchema } from './DiscordUserCreateNestedOneWithoutCreatedEventsInput.schema'
import { EventScheduleCreateNestedOneWithoutEventInputObjectSchema } from './EventScheduleCreateNestedOneWithoutEventInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventCreateWithoutAttendeesInput> = z
  .object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    start: z.date(),
    createdBy: z.lazy(
      () => DiscordUserCreateNestedOneWithoutCreatedEventsInputObjectSchema
    ),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    schedule: z
      .lazy(() => EventScheduleCreateNestedOneWithoutEventInputObjectSchema)
      .optional(),
    eventScheduleId: z.string(),
  })
  .strict()

export const DiscordEventCreateWithoutAttendeesInputObjectSchema = Schema
