import * as z from "zod"
import { CompleteGuild, RelatedGuildModel, CompleteEmoji, RelatedEmojiModel, CompleteMessage, RelatedMessageModel, CompleteChannel, RelatedChannelModel } from "./index"

export const UserModel = z.object({
  /**
   * Users ID (snowflake)
   */
  id: z.string(),
  /**
   * User name, not unique
   */
  username: z.string(),
  /**
   * Users four digit discord tag
   */
  discriminator: z.string(),
  /**
   * Users avatar
   */
  avatar: z.string().nullish(),
  /**
   * Is the user a bot?
   */
  bot: z.boolean().nullish(),
  /**
   * Is the user a Discord System user?
   */
  system: z.boolean().nullish(),
  /**
   * MFA Enabled?
   */
  mfa_enabled: z.boolean().nullish(),
  /**
   * Banner
   */
  banner: z.string().nullish(),
  /**
   * Accent Color
   */
  accent_color: z.number().int().nullish(),
  /**
   * Locale
   */
  locale: z.string().nullish(),
  /**
   * Verified?
   */
  verified: z.boolean().nullish(),
  /**
   * Email
   */
  email: z.string().nullish(),
  /**
   * Flags
   */
  flags: z.number().int().nullish(),
  /**
   * Premium Type
   */
  premium_type: z.number().int().nullish(),
  /**
   * Public Flags
   */
  public_flags: z.number().int().nullish(),
  guildIds: z.string().array(),
  emojiIds: z.string().array(),
  messageIds: z.string().array(),
  channelIds: z.string().array(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  guilds: CompleteGuild[]
  emojis: CompleteEmoji[]
  Messages: CompleteMessage[]
  channels: CompleteChannel[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  /**
   * Users guilds
   */
  guilds: RelatedGuildModel.array(),
  /**
   * User Created Emojis
   */
  emojis: RelatedEmojiModel.array(),
  /**
   * Messages
   */
  Messages: RelatedMessageModel.array(),
  /**
   * Channels
   */
  channels: RelatedChannelModel.array(),
}))
