import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { RoleListRelationFilterObjectSchema } from './RoleListRelationFilter.schema';
import { EmojiListRelationFilterObjectSchema } from './EmojiListRelationFilter.schema';
import { EnumFeaturesNullableListFilterObjectSchema } from './EnumFeaturesNullableListFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { ChannelListRelationFilterObjectSchema } from './ChannelListRelationFilter.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GuildWhereInputObjectSchema),
        z.lazy(() => GuildWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GuildWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GuildWhereInputObjectSchema),
        z.lazy(() => GuildWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    icon: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    icon_hash: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    splash: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    discovery_splash: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    owner_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    permissions: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    region: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    afk_channel_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    afk_timeout: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    widget_enabled: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    widget_channel_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    verification_level: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    default_message_notifications: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    explicit_content_filter: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    roles: z.lazy(() => RoleListRelationFilterObjectSchema).optional(),
    emojis: z.lazy(() => EmojiListRelationFilterObjectSchema).optional(),
    features: z
      .lazy(() => EnumFeaturesNullableListFilterObjectSchema)
      .optional(),
    mfa_level: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    application_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    system_channel_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    system_channel_flags: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    rules_channel_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    max_presences: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    max_members: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    vanity_url_code: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    banner: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    premium_tier: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    premium_subscription_count: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    preferred_locale: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    public_updates_channel_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    max_video_channel_users: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    approximate_member_count: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    approximate_presence_count: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    nsfw_level: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    premium_progress_bar_enabled: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    userIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    channels: z.lazy(() => ChannelListRelationFilterObjectSchema).optional(),
    channelIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const GuildWhereInputObjectSchema = Schema;
