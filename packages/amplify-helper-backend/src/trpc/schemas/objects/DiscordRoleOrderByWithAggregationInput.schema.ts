import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { DiscordRoleCountOrderByAggregateInputObjectSchema } from './DiscordRoleCountOrderByAggregateInput.schema'
import { DiscordRoleMaxOrderByAggregateInputObjectSchema } from './DiscordRoleMaxOrderByAggregateInput.schema'
import { DiscordRoleMinOrderByAggregateInputObjectSchema } from './DiscordRoleMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DiscordRoleCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => DiscordRoleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DiscordRoleMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const DiscordRoleOrderByWithAggregationInputObjectSchema = Schema
