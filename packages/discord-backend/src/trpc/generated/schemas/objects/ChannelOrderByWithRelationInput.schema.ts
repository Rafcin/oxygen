import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GuildOrderByRelationAggregateInputObjectSchema } from './GuildOrderByRelationAggregateInput.schema';
import { MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    channel_type: z.lazy(() => SortOrderSchema).optional(),
    thread: z.lazy(() => SortOrderSchema).optional(),
    position: z.lazy(() => SortOrderSchema).optional(),
    topic: z.lazy(() => SortOrderSchema).optional(),
    nsfw: z.lazy(() => SortOrderSchema).optional(),
    last_message_id: z.lazy(() => SortOrderSchema).optional(),
    bitrate: z.lazy(() => SortOrderSchema).optional(),
    user_limit: z.lazy(() => SortOrderSchema).optional(),
    rate_limit_per_user: z.lazy(() => SortOrderSchema).optional(),
    icon: z.lazy(() => SortOrderSchema).optional(),
    owner_id: z.lazy(() => SortOrderSchema).optional(),
    application_id: z.lazy(() => SortOrderSchema).optional(),
    parent_id: z.lazy(() => SortOrderSchema).optional(),
    last_pin_timestamp: z.lazy(() => SortOrderSchema).optional(),
    rtc_region: z.lazy(() => SortOrderSchema).optional(),
    video_quality_mode: z.lazy(() => SortOrderSchema).optional(),
    message_count: z.lazy(() => SortOrderSchema).optional(),
    member_count: z.lazy(() => SortOrderSchema).optional(),
    default_auto_archive_duration: z.lazy(() => SortOrderSchema).optional(),
    permissions: z.lazy(() => SortOrderSchema).optional(),
    flags: z.lazy(() => SortOrderSchema).optional(),
    total_message_sent: z.lazy(() => SortOrderSchema).optional(),
    guilds: z
      .lazy(() => GuildOrderByRelationAggregateInputObjectSchema)
      .optional(),
    guildIds: z.lazy(() => SortOrderSchema).optional(),
    Message: z
      .lazy(() => MessageOrderByRelationAggregateInputObjectSchema)
      .optional(),
    messageIds: z.lazy(() => SortOrderSchema).optional(),
    users: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    userIds: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ChannelOrderByWithRelationInputObjectSchema = Schema;
