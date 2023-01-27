import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AccessLevelRoleCountOrderByAggregateInputObjectSchema } from './AccessLevelRoleCountOrderByAggregateInput.schema'
import { AccessLevelRoleMaxOrderByAggregateInputObjectSchema } from './AccessLevelRoleMaxOrderByAggregateInput.schema'
import { AccessLevelRoleMinOrderByAggregateInputObjectSchema } from './AccessLevelRoleMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    accessLevelId: z.lazy(() => SortOrderSchema).optional(),
    configurationId: z.lazy(() => SortOrderSchema).optional(),
    discordRoleId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AccessLevelRoleCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AccessLevelRoleMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AccessLevelRoleMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const AccessLevelRoleOrderByWithAggregationInputObjectSchema = Schema
