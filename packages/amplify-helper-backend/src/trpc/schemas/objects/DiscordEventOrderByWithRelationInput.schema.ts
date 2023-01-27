import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { DiscordUserOrderByWithRelationInputObjectSchema } from './DiscordUserOrderByWithRelationInput.schema'
import { EventScheduleOrderByWithRelationInputObjectSchema } from './EventScheduleOrderByWithRelationInput.schema'
import { DiscordEventAttendeeOrderByRelationAggregateInputObjectSchema } from './DiscordEventAttendeeOrderByRelationAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    start: z.lazy(() => SortOrderSchema).optional(),
    createdBy: z
      .lazy(() => DiscordUserOrderByWithRelationInputObjectSchema)
      .optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    schedule: z
      .lazy(() => EventScheduleOrderByWithRelationInputObjectSchema)
      .optional(),
    scheduleId: z.lazy(() => SortOrderSchema).optional(),
    attendees: z
      .lazy(() => DiscordEventAttendeeOrderByRelationAggregateInputObjectSchema)
      .optional(),
    eventScheduleId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const DiscordEventOrderByWithRelationInputObjectSchema = Schema
