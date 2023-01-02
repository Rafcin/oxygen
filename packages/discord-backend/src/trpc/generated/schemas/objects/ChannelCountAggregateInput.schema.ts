import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    channel_discord_type: z.literal(true).optional(),
    thread: z.literal(true).optional(),
    position: z.literal(true).optional(),
    topic: z.literal(true).optional(),
    nsfw: z.literal(true).optional(),
    last_message_id: z.literal(true).optional(),
    bitrate: z.literal(true).optional(),
    user_limit: z.literal(true).optional(),
    rate_limit_per_user: z.literal(true).optional(),
    icon: z.literal(true).optional(),
    owner_id: z.literal(true).optional(),
    application_id: z.literal(true).optional(),
    parent_id: z.literal(true).optional(),
    last_pin_timestamp: z.literal(true).optional(),
    rtc_region: z.literal(true).optional(),
    video_quality_mode: z.literal(true).optional(),
    message_count: z.literal(true).optional(),
    member_count: z.literal(true).optional(),
    default_auto_archive_duration: z.literal(true).optional(),
    permissions: z.literal(true).optional(),
    flags: z.literal(true).optional(),
    total_message_sent: z.literal(true).optional(),
    guildIds: z.literal(true).optional(),
    messageIds: z.literal(true).optional(),
    userIds: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ChannelCountAggregateInputObjectSchema = Schema;
