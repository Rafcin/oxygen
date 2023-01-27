import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AuditLogCountOrderByAggregateInputObjectSchema } from './AuditLogCountOrderByAggregateInput.schema'
import { AuditLogMaxOrderByAggregateInputObjectSchema } from './AuditLogMaxOrderByAggregateInput.schema'
import { AuditLogMinOrderByAggregateInputObjectSchema } from './AuditLogMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AuditLogOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    action: z.lazy(() => SortOrderSchema).optional(),
    data: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => AuditLogCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => AuditLogMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AuditLogMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const AuditLogOrderByWithAggregationInputObjectSchema = Schema
