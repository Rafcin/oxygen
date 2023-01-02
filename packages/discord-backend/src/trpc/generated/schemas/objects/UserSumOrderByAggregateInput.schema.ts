import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = z
  .object({
    accent_color: z.lazy(() => SortOrderSchema).optional(),
    flags: z.lazy(() => SortOrderSchema).optional(),
    premium_type: z.lazy(() => SortOrderSchema).optional(),
    public_flags: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserSumOrderByAggregateInputObjectSchema = Schema;
