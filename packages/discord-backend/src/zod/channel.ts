import * as z from "zod"
import { CompleteGuild, RelatedGuildModel, CompleteMessage, RelatedMessageModel, CompleteUser, RelatedUserModel } from "./index"

export const ChannelModel = z.object({
  /**
   * Discord snowflake
   */
  id: z.string(),
  /**
   * Channel name
   */
  name: z.string(),
  /**
   * GUILD_TEXT	0	a text channel within a server
   * DM	1	a direct message between users
   * GUILD_VOICE	2	a voice channel within a server
   * GROUP_DM	3	a direct message between multiple users
   * GUILD_CATEGORY	4	an organizational category that contains up to 50 channels
   * GUILD_ANNOUNCEMENT	5	a channel that users can follow and crosspost into their own server (formerly news channels)
   * ANNOUNCEMENT_THREAD	10	a temporary sub-channel within a GUILD_ANNOUNCEMENT channel
   * PUBLIC_THREAD	11	a temporary sub-channel within a GUILD_TEXT or GUILD_FORUM channel
   * PRIVATE_THREAD	12	a temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission
   * GUILD_STAGE_VOICE	13	a voice channel for hosting events with an audience
   * GUILD_DIRECTORY	14	the channel in a hub containing the listed servers
   * GUILD_FORUM	15	Channel that can only contain threads
   * Renamed due to TS issues.
   */
  channel_discord_type: z.number().int(),
  /**
   * Is thread
   */
  thread: z.boolean().nullish(),
  /**
   * Channel position
   */
  position: z.number().int().nullish(),
  /**
   * Channel topic
   */
  topic: z.string().nullish(),
  /**
   * Channel nsfw
   */
  nsfw: z.boolean().nullish(),
  /**
   * Channel last message ID (snowflake)
   */
  last_message_id: z.string().nullish(),
  /**
   * Channel bitrate (in bits)
   */
  bitrate: z.number().int().nullish(),
  /**
   * Channel user limit
   */
  user_limit: z.number().int().nullish(),
  /**
   * Channel rate limit per user (seconds)
   */
  rate_limit_per_user: z.number().int().nullish(),
  /**
   * Channel icon
   */
  icon: z.string().nullish(),
  /**
   * Channel owner ID (snowflake)
   */
  owner_id: z.string().nullish(),
  /**
   * Channel application ID (snowflake)
   */
  application_id: z.string().nullish(),
  /**
   * Channel parent ID (snowflake)
   */
  parent_id: z.string().nullish(),
  /**
   * Channel last pin timestamp
   */
  last_pin_timestamp: z.string().nullish(),
  /**
   * RTC region
   */
  rtc_region: z.string().nullish(),
  /**
   * Video quality mode
   * AUTO	1	Discord chooses the quality for optimal performance
   * FULL	2	720p
   */
  video_quality_mode: z.string().nullish(),
  /**
   * Message count
   */
  message_count: z.number().int().nullish(),
  /**
   * Member count
   */
  member_count: z.number().int().nullish(),
  /**
   * Default auto archive duration
   */
  default_auto_archive_duration: z.number().int().nullish(),
  /**
   * Permissions
   */
  permissions: z.string().nullish(),
  /**
   * Flags
   */
  flags: z.number().int().nullish(),
  /**
   * Total message sent
   */
  total_message_sent: z.number().int().nullish(),
  guildIds: z.string().array(),
  messageIds: z.string().array(),
  userIds: z.string().array(),
})

export interface CompleteChannel extends z.infer<typeof ChannelModel> {
  guilds: CompleteGuild[]
  Message: CompleteMessage[]
  users: CompleteUser[]
}

/**
 * RelatedChannelModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelModel: z.ZodSchema<CompleteChannel> = z.lazy(() => ChannelModel.extend({
  /**
   * Guild
   */
  guilds: RelatedGuildModel.array(),
  /**
   * Messages
   */
  Message: RelatedMessageModel.array(),
  /**
   * Users
   */
  users: RelatedUserModel.array(),
}))
