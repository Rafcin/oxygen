import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EmojiCountOrderByAggregateInputObjectSchema } from './EmojiCountOrderByAggregateInput.schema';
import { EmojiMaxOrderByAggregateInputObjectSchema } from './EmojiMaxOrderByAggregateInput.schema';
import { EmojiMinOrderByAggregateInputObjectSchema } from './EmojiMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    userIds: z.lazy(() => SortOrderSchema).optional(),
    require_colons: z.lazy(() => SortOrderSchema).optional(),
    managed: z.lazy(() => SortOrderSchema).optional(),
    animated: z.lazy(() => SortOrderSchema).optional(),
    available: z.lazy(() => SortOrderSchema).optional(),
    guildId: z.lazy(() => SortOrderSchema).optional(),
    reactionIds: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => EmojiCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => EmojiMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EmojiMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const EmojiOrderByWithAggregationInputObjectSchema = Schema;
