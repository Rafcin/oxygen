import { z } from 'zod';
import { RoleUncheckedCreateNestedManyWithoutGuildInputObjectSchema } from './RoleUncheckedCreateNestedManyWithoutGuildInput.schema';
import { EmojiUncheckedCreateNestedManyWithoutGuildInputObjectSchema } from './EmojiUncheckedCreateNestedManyWithoutGuildInput.schema';
import { GuildCreatefeaturesInputObjectSchema } from './GuildCreatefeaturesInput.schema';
import { FeaturesSchema } from '../enums/Features.schema';
import { GuildCreateuserIdsInputObjectSchema } from './GuildCreateuserIdsInput.schema';
import { ChannelUncheckedCreateNestedManyWithoutGuildsInputObjectSchema } from './ChannelUncheckedCreateNestedManyWithoutGuildsInput.schema';
import { GuildCreatechannelIdsInputObjectSchema } from './GuildCreatechannelIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildUncheckedCreateWithoutUsersInput> = z
  .object({
    id: z.string(),
    name: z.string(),
    icon: z.string().optional().nullable(),
    icon_hash: z.string().optional().nullable(),
    splash: z.string().optional().nullable(),
    discovery_splash: z.string().optional().nullable(),
    owner_id: z.string().optional().nullable(),
    permissions: z.string().optional().nullable(),
    region: z.string().optional().nullable(),
    afk_channel_id: z.string().optional().nullable(),
    afk_timeout: z.number().optional().nullable(),
    widget_enabled: z.boolean().optional().nullable(),
    widget_channel_id: z.string().optional().nullable(),
    verification_level: z.number().optional().nullable(),
    default_message_notifications: z.number().optional().nullable(),
    explicit_content_filter: z.number().optional().nullable(),
    roles: z
      .lazy(() => RoleUncheckedCreateNestedManyWithoutGuildInputObjectSchema)
      .optional(),
    emojis: z
      .lazy(() => EmojiUncheckedCreateNestedManyWithoutGuildInputObjectSchema)
      .optional(),
    features: z
      .union([
        z.lazy(() => GuildCreatefeaturesInputObjectSchema),
        z.lazy(() => FeaturesSchema).array(),
      ])
      .optional(),
    mfa_level: z.number(),
    application_id: z.string().optional().nullable(),
    system_channel_id: z.string().optional().nullable(),
    system_channel_flags: z.number(),
    rules_channel_id: z.string().optional().nullable(),
    max_presences: z.number().optional().nullable(),
    max_members: z.number().optional().nullable(),
    vanity_url_code: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    banner: z.string().optional().nullable(),
    premium_tier: z.number(),
    premium_subscription_count: z.number(),
    preferred_locale: z.string(),
    public_updates_channel_id: z.string().optional().nullable(),
    max_video_channel_users: z.number(),
    approximate_member_count: z.number().optional().nullable(),
    approximate_presence_count: z.number().optional().nullable(),
    nsfw_level: z.number(),
    premium_progress_bar_enabled: z.boolean().optional().nullable(),
    userIds: z
      .union([
        z.lazy(() => GuildCreateuserIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    channels: z
      .lazy(
        () => ChannelUncheckedCreateNestedManyWithoutGuildsInputObjectSchema,
      )
      .optional(),
    channelIds: z
      .union([
        z.lazy(() => GuildCreatechannelIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const GuildUncheckedCreateWithoutUsersInputObjectSchema = Schema;
