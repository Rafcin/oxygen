import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AccessLevelRoleOrderByRelationAggregateInputObjectSchema } from './AccessLevelRoleOrderByRelationAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelOrderByWithRelationInput> = z
  .object({
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    role: z
      .lazy(() => AccessLevelRoleOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const AccessLevelOrderByWithRelationInputObjectSchema = Schema
