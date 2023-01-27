import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { GuildOrderByWithRelationInputObjectSchema } from './GuildOrderByWithRelationInput.schema'
import { DiscordUserOrderByWithRelationInputObjectSchema } from './DiscordUserOrderByWithRelationInput.schema'
import { DiscordEventOrderByRelationAggregateInputObjectSchema } from './DiscordEventOrderByRelationAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    guild: z.lazy(() => GuildOrderByWithRelationInputObjectSchema).optional(),
    guildId: z.lazy(() => SortOrderSchema).optional(),
    createdBy: z
      .lazy(() => DiscordUserOrderByWithRelationInputObjectSchema)
      .optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    event: z
      .lazy(() => DiscordEventOrderByRelationAggregateInputObjectSchema)
      .optional(),
    schedule: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const EventScheduleOrderByWithRelationInputObjectSchema = Schema
