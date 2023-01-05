import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelSumAggregateInputType> = z
  .object({
    channel_class: z.literal(true).optional(),
    position: z.literal(true).optional(),
    bitrate: z.literal(true).optional(),
    user_limit: z.literal(true).optional(),
    rate_limit_per_user: z.literal(true).optional(),
    message_count: z.literal(true).optional(),
    member_count: z.literal(true).optional(),
    default_auto_archive_duration: z.literal(true).optional(),
    flags: z.literal(true).optional(),
    total_message_sent: z.literal(true).optional(),
  })
  .strict();

export const ChannelSumAggregateInputObjectSchema = Schema;
