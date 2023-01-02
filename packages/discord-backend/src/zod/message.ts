import * as z from "zod"
import { CompleteRole, RelatedRoleModel, CompleteReaction, RelatedReactionModel, CompleteUser, RelatedUserModel, CompleteChannel, RelatedChannelModel } from "./index"

export const MessageModel = z.object({
  /**
   * Discord snowflake
   */
  id: z.string(),
  /**
   * Is thread
   */
  thread: z.boolean().nullish(),
  /**
   * Channel ID
   */
  channel_id: z.string(),
  /**
   * Content
   */
  content: z.string(),
  /**
   * Timestamp
   */
  timestamp: z.string(),
  /**
   * Edited timestamp
   */
  edited_timestamp: z.string().nullish(),
  /**
   * TTS?
   */
  tts: z.boolean(),
  /**
   * Mention everyone?
   */
  mention_everyone: z.boolean(),
  reactionIds: z.string().array(),
  /**
   * Nonce
   */
  nonce: z.string().nullish(),
  /**
   * Pinned?
   */
  pinned: z.boolean(),
  /**
   * Webhook ID
   */
  webhook_id: z.string().nullish(),
  /**
   * Type
   */
  message_discord_type: z.number().int(),
  /**
   * Flags
   */
  flags: z.number().int().nullish(),
  /**
   * Application ID
   */
  application_id: z.string().nullish(),
  /**
   * Position
   */
  position: z.number().int().nullish(),
  userIds: z.string().array(),
  channelIds: z.string().array(),
})

export interface CompleteMessage extends z.infer<typeof MessageModel> {
  mention_roles: CompleteRole[]
  reactions: CompleteReaction[]
  users: CompleteUser[]
  channels: CompleteChannel[]
}

/**
 * RelatedMessageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMessageModel: z.ZodSchema<CompleteMessage> = z.lazy(() => MessageModel.extend({
  /**
   * Mention roles
   */
  mention_roles: RelatedRoleModel.array(),
  /**
   * Reactions
   */
  reactions: RelatedReactionModel.array(),
  /**
   * User
   */
  users: RelatedUserModel.array(),
  /**
   * Channel
   */
  channels: RelatedChannelModel.array(),
}))
