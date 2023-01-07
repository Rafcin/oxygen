import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.VerificationTokenMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    identifier: z.lazy(() => SortOrderSchema).optional(),
    token: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const VerificationTokenMinOrderByAggregateInputObjectSchema = Schema;
