import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildAvgAggregateInputType> = z
  .object({
    afk_timeout: z.literal(true).optional(),
    verification_level: z.literal(true).optional(),
    default_message_notifications: z.literal(true).optional(),
    explicit_content_filter: z.literal(true).optional(),
    mfa_level: z.literal(true).optional(),
    system_channel_flags: z.literal(true).optional(),
    max_presences: z.literal(true).optional(),
    max_members: z.literal(true).optional(),
    premium_tier: z.literal(true).optional(),
    premium_subscription_count: z.literal(true).optional(),
    max_video_channel_users: z.literal(true).optional(),
    approximate_member_count: z.literal(true).optional(),
    approximate_presence_count: z.literal(true).optional(),
    nsfw_level: z.literal(true).optional(),
  })
  .strict();

export const GuildAvgAggregateInputObjectSchema = Schema;
