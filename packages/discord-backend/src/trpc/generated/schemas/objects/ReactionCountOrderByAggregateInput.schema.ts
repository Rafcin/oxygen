import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    count: z.lazy(() => SortOrderSchema).optional(),
    emojiIds: z.lazy(() => SortOrderSchema).optional(),
    messageIds: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReactionCountOrderByAggregateInputObjectSchema = Schema;
