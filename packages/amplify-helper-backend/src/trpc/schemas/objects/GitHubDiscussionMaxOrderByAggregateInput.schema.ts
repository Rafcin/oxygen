import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const GitHubDiscussionMaxOrderByAggregateInputObjectSchema = Schema