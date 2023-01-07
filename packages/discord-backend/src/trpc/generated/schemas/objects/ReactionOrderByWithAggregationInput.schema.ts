import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReactionCountOrderByAggregateInputObjectSchema } from './ReactionCountOrderByAggregateInput.schema';
import { ReactionAvgOrderByAggregateInputObjectSchema } from './ReactionAvgOrderByAggregateInput.schema';
import { ReactionMaxOrderByAggregateInputObjectSchema } from './ReactionMaxOrderByAggregateInput.schema';
import { ReactionMinOrderByAggregateInputObjectSchema } from './ReactionMinOrderByAggregateInput.schema';
import { ReactionSumOrderByAggregateInputObjectSchema } from './ReactionSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    count: z.lazy(() => SortOrderSchema).optional(),
    emojiIds: z.lazy(() => SortOrderSchema).optional(),
    messageIds: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ReactionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ReactionAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ReactionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ReactionMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ReactionSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ReactionOrderByWithAggregationInputObjectSchema = Schema;
