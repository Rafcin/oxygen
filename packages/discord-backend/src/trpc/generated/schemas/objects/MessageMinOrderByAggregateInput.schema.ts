import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    thread: z.lazy(() => SortOrderSchema).optional(),
    channel_id: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    timestamp: z.lazy(() => SortOrderSchema).optional(),
    edited_timestamp: z.lazy(() => SortOrderSchema).optional(),
    tts: z.lazy(() => SortOrderSchema).optional(),
    mention_everyone: z.lazy(() => SortOrderSchema).optional(),
    nonce: z.lazy(() => SortOrderSchema).optional(),
    pinned: z.lazy(() => SortOrderSchema).optional(),
    webhook_id: z.lazy(() => SortOrderSchema).optional(),
    message_discord_type: z.lazy(() => SortOrderSchema).optional(),
    flags: z.lazy(() => SortOrderSchema).optional(),
    application_id: z.lazy(() => SortOrderSchema).optional(),
    position: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const MessageMinOrderByAggregateInputObjectSchema = Schema;
