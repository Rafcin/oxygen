import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelSumOrderByAggregateInput> = z
  .object({
    channel_discord_type: z.lazy(() => SortOrderSchema).optional(),
    position: z.lazy(() => SortOrderSchema).optional(),
    bitrate: z.lazy(() => SortOrderSchema).optional(),
    user_limit: z.lazy(() => SortOrderSchema).optional(),
    rate_limit_per_user: z.lazy(() => SortOrderSchema).optional(),
    message_count: z.lazy(() => SortOrderSchema).optional(),
    member_count: z.lazy(() => SortOrderSchema).optional(),
    default_auto_archive_duration: z.lazy(() => SortOrderSchema).optional(),
    flags: z.lazy(() => SortOrderSchema).optional(),
    total_message_sent: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ChannelSumOrderByAggregateInputObjectSchema = Schema;
