import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiCountOrderByAggregateInput> = z
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
  })
  .strict();

export const EmojiCountOrderByAggregateInputObjectSchema = Schema;
