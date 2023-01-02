import * as z from "zod"
import { Features } from "@prisma/client"
import { CompleteRole, RelatedRoleModel, CompleteEmoji, RelatedEmojiModel, CompleteUser, RelatedUserModel, CompleteChannel, RelatedChannelModel } from "./index"

export const GuildModel = z.object({
  /**
   * Discord snowflake
   */
  id: z.string(),
  /**
   * Guild name
   */
  name: z.string(),
  /**
   * Guild icon
   */
  icon: z.string().nullish(),
  /**
   * Icon Hash
   */
  icon_hash: z.string().nullish(),
  /**
   * Guild splash
   */
  splash: z.string().nullish(),
  /**
   * Guild discovery splash
   */
  discovery_splash: z.string().nullish(),
  /**
   * Guild owner ID (snowflake)
   */
  owner_id: z.string().nullish(),
  /**
   * Permissions for the guild owner
   */
  permissions: z.string().nullish(),
  /**
   * Guild region
   */
  region: z.string().nullish(),
  /**
   * Guild AFK channel ID (snowflake)
   */
  afk_channel_id: z.string().nullish(),
  /**
   * AFK timeout in seconds
   */
  afk_timeout: z.number().int().nullish(),
  /**
   * Widget enabled?
   */
  widget_enabled: z.boolean().nullish(),
  /**
   * Widget channel ID (snowflake)
   */
  widget_channel_id: z.string().nullish(),
  /**
   * Verification level
   * NONE	0	unrestricted
   * LOW	1	must have verified email on account
   * MEDIUM	2	must be registered on Discord for longer than 5 minutes
   * HIGH	3	must be a member of the server for longer than 10 minutes
   * VERY_HIGH	4	must have a verified phone number
   */
  verification_level: z.number().int().nullish(),
  /**
   * Default message notifications level
   */
  default_message_notifications: z.number().int().nullish(),
  /**
   * Explicit content filter level
   * LEVEL	INTEGER	DESCRIPTION
   * DISABLED	0	media content will not be scanned
   * MEMBERS_WITHOUT_ROLES	1	media content sent by members without roles will be scanned
   * ALL_MEMBERS	2	media content sent by all members will be scanned
   */
  explicit_content_filter: z.number().int().nullish(),
  /**
   * Enabled guild features
   */
  features: z.nativeEnum(Features).array(),
  /**
   * MFA level required for the guild
   * NONE	0	guild has no MFA/2FA requirement for moderation actions
   * ELEVATED	1	guild has a 2FA requirement for moderation actions
   */
  mfa_level: z.number().int(),
  /**
   * Application ID of the guild creator if it is bot-created
   */
  application_id: z.string().nullish(),
  /**
   * System channel ID (snowflake)
   */
  system_channel_id: z.string().nullish(),
  /**
   * System channel flags
   * SUPPRESS_JOIN_NOTIFICATIONS	1 << 0	Suppress member join notifications
   * SUPPRESS_PREMIUM_SUBSCRIPTIONS	1 << 1	Suppress server boost notifications
   * SUPPRESS_GUILD_REMINDER_NOTIFICATIONS	1 << 2	Suppress server setup tips
   * SUPPRESS_JOIN_NOTIFICATION_REPLIES	1 << 3	Hide member join sticker reply buttons
   */
  system_channel_flags: z.number().int(),
  /**
   * Rules channel ID (snowflake)
   */
  rules_channel_id: z.string().nullish(),
  /**
   * The maximum number of presences for the guild (null is always returned, apart from the largest of guilds)
   */
  max_presences: z.number().int().nullish(),
  /**
   * The maximum number of members for the guild
   */
  max_members: z.number().int().nullish(),
  /**
   * The vanity URL code for the guild
   */
  vanity_url_code: z.string().nullish(),
  /**
   * The description for the guild, if the guild is discoverable
   */
  description: z.string().nullish(),
  /**
   * Banner
   */
  banner: z.string().nullish(),
  /**
   * Premium Tier (Server Boost level)
   * NONE	0	guild has not unlocked any Server Boost perks
   * TIER_1	1	guild has unlocked Server Boost level 1 perks
   * TIER_2	2	guild has unlocked Server Boost level 2 perks
   * TIER_3	3	guild has unlocked Server Boost level 3 perks
   */
  premium_tier: z.number().int(),
  /**
   * The number of boosts this guild currently has
   */
  premium_subscription_count: z.number().int(),
  /**
   * The preferred locale of a guild with the "DISCOVERABLE" feature, defaults to "en-US"
   */
  preferred_locale: z.string(),
  /**
   * The public updates channel ID (snowflake)
   */
  public_updates_channel_id: z.string().nullish(),
  /**
   * The maximum amount of users in a video channel
   */
  max_video_channel_users: z.number().int(),
  /**
   * Approximate number of members in this guild
   */
  approximate_member_count: z.number().int().nullish(),
  /**
   * Approximate number of presences in this guild
   */
  approximate_presence_count: z.number().int().nullish(),
  /**
   * Guild NSFW level
   * DEFAULT	0
   * EXPLICIT	1
   * SAFE	2
   * AGE_RESTRICTED
   */
  nsfw_level: z.number().int(),
  /**
   * Premium progress bar?
   */
  premium_progress_bar_enabled: z.boolean().nullish(),
  userIds: z.string().array(),
  channelIds: z.string().array(),
})

export interface CompleteGuild extends z.infer<typeof GuildModel> {
  roles: CompleteRole[]
  emojis: CompleteEmoji[]
  users: CompleteUser[]
  channels: CompleteChannel[]
}

/**
 * RelatedGuildModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedGuildModel: z.ZodSchema<CompleteGuild> = z.lazy(() => GuildModel.extend({
  /**
   * Roles in the guild
   */
  roles: RelatedRoleModel.array(),
  /**
   * Custom guild emojis
   */
  emojis: RelatedEmojiModel.array(),
  /**
   * Users in Guild
   */
  users: RelatedUserModel.array(),
  /**
   * Channels in Guild
   */
  channels: RelatedChannelModel.array(),
}))
