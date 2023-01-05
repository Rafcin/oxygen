import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    icon: z.lazy(() => SortOrderSchema).optional(),
    icon_hash: z.lazy(() => SortOrderSchema).optional(),
    splash: z.lazy(() => SortOrderSchema).optional(),
    discovery_splash: z.lazy(() => SortOrderSchema).optional(),
    owner_id: z.lazy(() => SortOrderSchema).optional(),
    permissions: z.lazy(() => SortOrderSchema).optional(),
    region: z.lazy(() => SortOrderSchema).optional(),
    afk_channel_id: z.lazy(() => SortOrderSchema).optional(),
    afk_timeout: z.lazy(() => SortOrderSchema).optional(),
    widget_enabled: z.lazy(() => SortOrderSchema).optional(),
    widget_channel_id: z.lazy(() => SortOrderSchema).optional(),
    verification_level: z.lazy(() => SortOrderSchema).optional(),
    default_message_notifications: z.lazy(() => SortOrderSchema).optional(),
    explicit_content_filter: z.lazy(() => SortOrderSchema).optional(),
    features: z.lazy(() => SortOrderSchema).optional(),
    mfa_level: z.lazy(() => SortOrderSchema).optional(),
    application_id: z.lazy(() => SortOrderSchema).optional(),
    system_channel_id: z.lazy(() => SortOrderSchema).optional(),
    system_channel_flags: z.lazy(() => SortOrderSchema).optional(),
    rules_channel_id: z.lazy(() => SortOrderSchema).optional(),
    max_presences: z.lazy(() => SortOrderSchema).optional(),
    max_members: z.lazy(() => SortOrderSchema).optional(),
    vanity_url_code: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    banner: z.lazy(() => SortOrderSchema).optional(),
    premium_tier: z.lazy(() => SortOrderSchema).optional(),
    premium_subscription_count: z.lazy(() => SortOrderSchema).optional(),
    preferred_locale: z.lazy(() => SortOrderSchema).optional(),
    public_updates_channel_id: z.lazy(() => SortOrderSchema).optional(),
    max_video_channel_users: z.lazy(() => SortOrderSchema).optional(),
    approximate_member_count: z.lazy(() => SortOrderSchema).optional(),
    approximate_presence_count: z.lazy(() => SortOrderSchema).optional(),
    nsfw_level: z.lazy(() => SortOrderSchema).optional(),
    premium_progress_bar_enabled: z.lazy(() => SortOrderSchema).optional(),
    userIds: z.lazy(() => SortOrderSchema).optional(),
    channelIds: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const GuildCountOrderByAggregateInputObjectSchema = Schema;
