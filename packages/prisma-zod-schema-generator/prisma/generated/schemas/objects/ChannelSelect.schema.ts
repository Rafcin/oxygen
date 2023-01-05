import { z } from 'zod';
import { GuildFindManySchema } from '../findManyGuild.schema';
import { MessageFindManySchema } from '../findManyMessage.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { ChannelCountOutputTypeArgsObjectSchema } from './ChannelCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    channel_class: z.boolean().optional(),
    thread: z.boolean().optional(),
    position: z.boolean().optional(),
    topic: z.boolean().optional(),
    nsfw: z.boolean().optional(),
    last_message_id: z.boolean().optional(),
    bitrate: z.boolean().optional(),
    user_limit: z.boolean().optional(),
    rate_limit_per_user: z.boolean().optional(),
    icon: z.boolean().optional(),
    owner_id: z.boolean().optional(),
    application_id: z.boolean().optional(),
    parent_id: z.boolean().optional(),
    last_pin_timestamp: z.boolean().optional(),
    rtc_region: z.boolean().optional(),
    video_quality_mode: z.boolean().optional(),
    message_count: z.boolean().optional(),
    member_count: z.boolean().optional(),
    default_auto_archive_duration: z.boolean().optional(),
    permissions: z.boolean().optional(),
    flags: z.boolean().optional(),
    total_message_sent: z.boolean().optional(),
    guilds: z
      .union([z.boolean(), z.lazy(() => GuildFindManySchema)])
      .optional(),
    guildIds: z.boolean().optional(),
    Message: z
      .union([z.boolean(), z.lazy(() => MessageFindManySchema)])
      .optional(),
    messageIds: z.boolean().optional(),
    users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    userIds: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ChannelCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ChannelSelectObjectSchema = Schema;
