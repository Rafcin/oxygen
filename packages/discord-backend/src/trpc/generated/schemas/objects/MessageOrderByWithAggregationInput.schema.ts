import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MessageCountOrderByAggregateInputObjectSchema } from './MessageCountOrderByAggregateInput.schema';
import { MessageAvgOrderByAggregateInputObjectSchema } from './MessageAvgOrderByAggregateInput.schema';
import { MessageMaxOrderByAggregateInputObjectSchema } from './MessageMaxOrderByAggregateInput.schema';
import { MessageMinOrderByAggregateInputObjectSchema } from './MessageMinOrderByAggregateInput.schema';
import { MessageSumOrderByAggregateInputObjectSchema } from './MessageSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    thread: z.lazy(() => SortOrderSchema).optional(),
    channel_id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    edited_timestamp: z.lazy(() => SortOrderSchema).optional(),
    tts: z.lazy(() => SortOrderSchema).optional(),
    mention_everyone: z.lazy(() => SortOrderSchema).optional(),
    reactionIds: z.lazy(() => SortOrderSchema).optional(),
    nonce: z.lazy(() => SortOrderSchema).optional(),
    pinned: z.lazy(() => SortOrderSchema).optional(),
    webhook_id: z.lazy(() => SortOrderSchema).optional(),
    message_discord_type: z.lazy(() => SortOrderSchema).optional(),
    flags: z.lazy(() => SortOrderSchema).optional(),
    application_id: z.lazy(() => SortOrderSchema).optional(),
    position: z.lazy(() => SortOrderSchema).optional(),
    userIds: z.lazy(() => SortOrderSchema).optional(),
    channelIds: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MessageCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => MessageAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => MessageMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MessageMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => MessageSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MessageOrderByWithAggregationInputObjectSchema = Schema;
