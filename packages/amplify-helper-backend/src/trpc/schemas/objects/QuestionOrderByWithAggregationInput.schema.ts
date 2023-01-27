import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { QuestionCountOrderByAggregateInputObjectSchema } from './QuestionCountOrderByAggregateInput.schema'
import { QuestionMaxOrderByAggregateInputObjectSchema } from './QuestionMaxOrderByAggregateInput.schema'
import { QuestionMinOrderByAggregateInputObjectSchema } from './QuestionMinOrderByAggregateInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    threadId: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    channelName: z.lazy(() => SortOrderSchema).optional(),
    threadMetaUpdatedAt: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    isSolved: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    guildId: z.lazy(() => SortOrderSchema).optional(),
    githubDiscussionId: z.lazy(() => SortOrderSchema).optional(),
    tagId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => QuestionCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => QuestionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => QuestionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const QuestionOrderByWithAggregationInputObjectSchema = Schema
