import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    icon: z.literal(true).optional(),
    icon_hash: z.literal(true).optional(),
    splash: z.literal(true).optional(),
    discovery_splash: z.literal(true).optional(),
    owner_id: z.literal(true).optional(),
    permissions: z.literal(true).optional(),
    region: z.literal(true).optional(),
    afk_channel_id: z.literal(true).optional(),
    afk_timeout: z.literal(true).optional(),
    widget_enabled: z.literal(true).optional(),
    widget_channel_id: z.literal(true).optional(),
    verification_level: z.literal(true).optional(),
    default_message_notifications: z.literal(true).optional(),
    explicit_content_filter: z.literal(true).optional(),
    mfa_level: z.literal(true).optional(),
    application_id: z.literal(true).optional(),
    system_channel_id: z.literal(true).optional(),
    system_channel_flags: z.literal(true).optional(),
    rules_channel_id: z.literal(true).optional(),
    max_presences: z.literal(true).optional(),
    max_members: z.literal(true).optional(),
    vanity_url_code: z.literal(true).optional(),
    description: z.literal(true).optional(),
    banner: z.literal(true).optional(),
    premium_tier: z.literal(true).optional(),
    premium_subscription_count: z.literal(true).optional(),
    preferred_locale: z.literal(true).optional(),
    public_updates_channel_id: z.literal(true).optional(),
    max_video_channel_users: z.literal(true).optional(),
    approximate_member_count: z.literal(true).optional(),
    approximate_presence_count: z.literal(true).optional(),
    nsfw_level: z.literal(true).optional(),
    premium_progress_bar_enabled: z.literal(true).optional(),
  })
  .strict();

export const GuildMinAggregateInputObjectSchema = Schema;
