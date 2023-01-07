import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z
  .object({
    expires_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AccountSumOrderByAggregateInputObjectSchema = Schema;
