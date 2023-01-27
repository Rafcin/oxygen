import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { DiscordEventCountOrderByAggregateInputObjectSchema } from './DiscordEventCountOrderByAggregateInput.schema'
import { DiscordEventMaxOrderByAggregateInputObjectSchema } from './DiscordEventMaxOrderByAggregateInput.schema'
import { DiscordEventMinOrderByAggregateInputObjectSchema } from './DiscordEventMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    start: z.lazy(() => SortOrderSchema).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    scheduleId: z.lazy(() => SortOrderSchema).optional(),
    eventScheduleId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DiscordEventCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => DiscordEventMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DiscordEventMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const DiscordEventOrderByWithAggregationInputObjectSchema = Schema
