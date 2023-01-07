import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SanityCountOrderByAggregateInputObjectSchema } from './SanityCountOrderByAggregateInput.schema';
import { SanityMaxOrderByAggregateInputObjectSchema } from './SanityMaxOrderByAggregateInput.schema';
import { SanityMinOrderByAggregateInputObjectSchema } from './SanityMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SanityOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isSane: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SanityCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => SanityMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SanityMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SanityOrderByWithAggregationInputObjectSchema = Schema;
