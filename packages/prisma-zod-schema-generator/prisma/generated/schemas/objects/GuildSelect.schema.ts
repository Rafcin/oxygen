import { z } from 'zod';
import { RoleFindManySchema } from '../findManyRole.schema';
import { EmojiFindManySchema } from '../findManyEmoji.schema';
import { UserFindManySchema } from '../findManyUser.schema';
import { ChannelFindManySchema } from '../findManyChannel.schema';
import { GuildCountOutputTypeArgsObjectSchema } from './GuildCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    icon: z.boolean().optional(),
    icon_hash: z.boolean().optional(),
    splash: z.boolean().optional(),
    discovery_splash: z.boolean().optional(),
    owner_id: z.boolean().optional(),
    permissions: z.boolean().optional(),
    region: z.boolean().optional(),
    afk_channel_id: z.boolean().optional(),
    afk_timeout: z.boolean().optional(),
    widget_enabled: z.boolean().optional(),
    widget_channel_id: z.boolean().optional(),
    verification_level: z.boolean().optional(),
    default_message_notifications: z.boolean().optional(),
    explicit_content_filter: z.boolean().optional(),
    roles: z.union([z.boolean(), z.lazy(() => RoleFindManySchema)]).optional(),
    emojis: z
      .union([z.boolean(), z.lazy(() => EmojiFindManySchema)])
      .optional(),
    features: z.boolean().optional(),
    mfa_level: z.boolean().optional(),
    application_id: z.boolean().optional(),
    system_channel_id: z.boolean().optional(),
    system_channel_flags: z.boolean().optional(),
    rules_channel_id: z.boolean().optional(),
    max_presences: z.boolean().optional(),
    max_members: z.boolean().optional(),
    vanity_url_code: z.boolean().optional(),
    description: z.boolean().optional(),
    banner: z.boolean().optional(),
    premium_tier: z.boolean().optional(),
    premium_subscription_count: z.boolean().optional(),
    preferred_locale: z.boolean().optional(),
    public_updates_channel_id: z.boolean().optional(),
    max_video_channel_users: z.boolean().optional(),
    approximate_member_count: z.boolean().optional(),
    approximate_presence_count: z.boolean().optional(),
    nsfw_level: z.boolean().optional(),
    premium_progress_bar_enabled: z.boolean().optional(),
    users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    userIds: z.boolean().optional(),
    channels: z
      .union([z.boolean(), z.lazy(() => ChannelFindManySchema)])
      .optional(),
    channelIds: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => GuildCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const GuildSelectObjectSchema = Schema;
