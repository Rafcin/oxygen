import { z } from 'zod';
import { GuildCreateNestedManyWithoutChannelsInputObjectSchema } from './GuildCreateNestedManyWithoutChannelsInput.schema';
import { ChannelCreateguildIdsInputObjectSchema } from './ChannelCreateguildIdsInput.schema';
import { MessageCreateNestedManyWithoutChannelsInputObjectSchema } from './MessageCreateNestedManyWithoutChannelsInput.schema';
import { ChannelCreatemessageIdsInputObjectSchema } from './ChannelCreatemessageIdsInput.schema';
import { ChannelCreateuserIdsInputObjectSchema } from './ChannelCreateuserIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelCreateWithoutUsersInput> = z
  .object({
    id: z.string(),
    name: z.string(),
    channel_class: z.number(),
    thread: z.boolean().optional(),
    position: z.number().optional().nullable(),
    topic: z.string().optional().nullable(),
    nsfw: z.boolean().optional().nullable(),
    last_message_id: z.string().optional().nullable(),
    bitrate: z.number().optional().nullable(),
    user_limit: z.number().optional().nullable(),
    rate_limit_per_user: z.number().optional().nullable(),
    icon: z.string().optional().nullable(),
    owner_id: z.string().optional().nullable(),
    application_id: z.string().optional().nullable(),
    parent_id: z.string().optional().nullable(),
    last_pin_timestamp: z.string().optional().nullable(),
    rtc_region: z.string().optional().nullable(),
    video_quality_mode: z.string().optional().nullable(),
    message_count: z.number().optional().nullable(),
    member_count: z.number().optional().nullable(),
    default_auto_archive_duration: z.number().optional().nullable(),
    permissions: z.string().optional().nullable(),
    flags: z.number().optional().nullable(),
    total_message_sent: z.number().optional().nullable(),
    guilds: z
      .lazy(() => GuildCreateNestedManyWithoutChannelsInputObjectSchema)
      .optional(),
    guildIds: z
      .union([
        z.lazy(() => ChannelCreateguildIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    Message: z
      .lazy(() => MessageCreateNestedManyWithoutChannelsInputObjectSchema)
      .optional(),
    messageIds: z
      .union([
        z.lazy(() => ChannelCreatemessageIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    userIds: z
      .union([
        z.lazy(() => ChannelCreateuserIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const ChannelCreateWithoutUsersInputObjectSchema = Schema;
