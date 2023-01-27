import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { DiscordUserCountOrderByAggregateInputObjectSchema } from './DiscordUserCountOrderByAggregateInput.schema'
import { DiscordUserMaxOrderByAggregateInputObjectSchema } from './DiscordUserMaxOrderByAggregateInput.schema'
import { DiscordUserMinOrderByAggregateInputObjectSchema } from './DiscordUserMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DiscordUserCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => DiscordUserMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DiscordUserMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const DiscordUserOrderByWithAggregationInputObjectSchema = Schema
