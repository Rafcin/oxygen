import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildSumOrderByAggregateInput> = z
  .object({
    afk_timeout: z.lazy(() => SortOrderSchema).optional(),
    verification_level: z.lazy(() => SortOrderSchema).optional(),
    default_message_notifications: z.lazy(() => SortOrderSchema).optional(),
    explicit_content_filter: z.lazy(() => SortOrderSchema).optional(),
    mfa_level: z.lazy(() => SortOrderSchema).optional(),
    system_channel_flags: z.lazy(() => SortOrderSchema).optional(),
    max_presences: z.lazy(() => SortOrderSchema).optional(),
    max_members: z.lazy(() => SortOrderSchema).optional(),
    premium_tier: z.lazy(() => SortOrderSchema).optional(),
    premium_subscription_count: z.lazy(() => SortOrderSchema).optional(),
    max_video_channel_users: z.lazy(() => SortOrderSchema).optional(),
    approximate_member_count: z.lazy(() => SortOrderSchema).optional(),
    approximate_presence_count: z.lazy(() => SortOrderSchema).optional(),
    nsfw_level: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const GuildSumOrderByAggregateInputObjectSchema = Schema;
