import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { EventScheduleCountOrderByAggregateInputObjectSchema } from './EventScheduleCountOrderByAggregateInput.schema'
import { EventScheduleMaxOrderByAggregateInputObjectSchema } from './EventScheduleMaxOrderByAggregateInput.schema'
import { EventScheduleMinOrderByAggregateInputObjectSchema } from './EventScheduleMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.EventScheduleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    guildId: z.lazy(() => SortOrderSchema).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    schedule: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => EventScheduleCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => EventScheduleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EventScheduleMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const EventScheduleOrderByWithAggregationInputObjectSchema = Schema
