import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { DiscordEventAttendeeCountOrderByAggregateInputObjectSchema } from './DiscordEventAttendeeCountOrderByAggregateInput.schema'
import { DiscordEventAttendeeAvgOrderByAggregateInputObjectSchema } from './DiscordEventAttendeeAvgOrderByAggregateInput.schema'
import { DiscordEventAttendeeMaxOrderByAggregateInputObjectSchema } from './DiscordEventAttendeeMaxOrderByAggregateInput.schema'
import { DiscordEventAttendeeMinOrderByAggregateInputObjectSchema } from './DiscordEventAttendeeMinOrderByAggregateInput.schema'
import { DiscordEventAttendeeSumOrderByAggregateInputObjectSchema } from './DiscordEventAttendeeSumOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventAttendeeOrderByWithAggregationInput> = z
  .object({
    eventId: z.lazy(() => SortOrderSchema).optional(),
    memberId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    time: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DiscordEventAttendeeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => DiscordEventAttendeeAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => DiscordEventAttendeeMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => DiscordEventAttendeeMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => DiscordEventAttendeeSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordEventAttendeeOrderByWithAggregationInputObjectSchema = Schema
