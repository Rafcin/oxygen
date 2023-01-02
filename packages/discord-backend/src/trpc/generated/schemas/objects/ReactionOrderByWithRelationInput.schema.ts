import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EmojiOrderByRelationAggregateInputObjectSchema } from './EmojiOrderByRelationAggregateInput.schema';
import { MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    count: z.lazy(() => SortOrderSchema).optional(),
    emojis: z
      .lazy(() => EmojiOrderByRelationAggregateInputObjectSchema)
      .optional(),
    emojiIds: z.lazy(() => SortOrderSchema).optional(),
    messages: z
      .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    messageIds: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReactionOrderByWithRelationInputObjectSchema = Schema;
