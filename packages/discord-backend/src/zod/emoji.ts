import * as z from "zod"
import { CompleteRole, RelatedRoleModel, CompleteUser, RelatedUserModel, CompleteGuild, RelatedGuildModel, CompleteReaction, RelatedReactionModel } from "./index"

export const EmojiModel = z.object({
  /**
   * Discord snowflake
   */
  id: z.string(),
  /**
   * Emoji name
   */
  name: z.string(),
  userIds: z.string().array(),
  /**
   * Emoji require_colons
   */
  require_colons: z.boolean().nullish(),
  /**
   * Emoji managed
   */
  managed: z.boolean().nullish(),
  /**
   * Emoji animated
   */
  animated: z.boolean().nullish(),
  /**
   * Emoji available
   */
  available: z.boolean().nullish(),
  guildId: z.string(),
  reactionIds: z.string().array(),
})

export interface CompleteEmoji extends z.infer<typeof EmojiModel> {
  roles: CompleteRole[]
  users: CompleteUser[]
  Guild: CompleteGuild
  reactions: CompleteReaction[]
}

/**
 * RelatedEmojiModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedEmojiModel: z.ZodSchema<CompleteEmoji> = z.lazy(() => EmojiModel.extend({
  /**
   * Roles this emoji is whitelisted to
   */
  roles: RelatedRoleModel.array(),
  /**
   * User that created this emoji
   */
  users: RelatedUserModel.array(),
  /**
   * Connections
   */
  Guild: RelatedGuildModel,
  /**
   * Reactions
   */
  reactions: RelatedReactionModel.array(),
}))
