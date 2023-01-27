import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { GuildCountOrderByAggregateInputObjectSchema } from './GuildCountOrderByAggregateInput.schema'
import { GuildMaxOrderByAggregateInputObjectSchema } from './GuildMaxOrderByAggregateInput.schema'
import { GuildMinOrderByAggregateInputObjectSchema } from './GuildMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => GuildCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => GuildMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => GuildMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const GuildOrderByWithAggregationInputObjectSchema = Schema
