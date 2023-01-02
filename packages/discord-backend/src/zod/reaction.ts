import * as z from "zod"
import { CompleteEmoji, RelatedEmojiModel, CompleteMessage, RelatedMessageModel } from "./index"

export const ReactionModel = z.object({
  /**
   * Discord snowflake
   */
  id: z.string(),
  /**
   * Count
   */
  count: z.number().int(),
  emojiIds: z.string().array(),
  messageIds: z.string().array(),
})

export interface CompleteReaction extends z.infer<typeof ReactionModel> {
  emojis: CompleteEmoji[]
  messages: CompleteMessage[]
}

/**
 * RelatedReactionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedReactionModel: z.ZodSchema<CompleteReaction> = z.lazy(() => ReactionModel.extend({
  /**
   * Emoji
   */
  emojis: RelatedEmojiModel.array(),
  /**
   * Message ID
   */
  messages: RelatedMessageModel.array(),
}))
