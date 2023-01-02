import { z } from 'zod';

export const ChannelScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'channel_discord_type',
  'thread',
  'position',
  'topic',
  'nsfw',
  'last_message_id',
  'bitrate',
  'user_limit',
  'rate_limit_per_user',
  'icon',
  'owner_id',
  'application_id',
  'parent_id',
  'last_pin_timestamp',
  'rtc_region',
  'video_quality_mode',
  'message_count',
  'member_count',
  'default_auto_archive_duration',
  'permissions',
  'flags',
  'total_message_sent',
  'guildIds',
  'messageIds',
  'userIds',
]);
