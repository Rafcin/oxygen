import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionSumOrderByAggregateInput> = z
  .object({
    count: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReactionSumOrderByAggregateInputObjectSchema = Schema;
