import * as z from "zod"
import { CompleteGuild, RelatedGuildModel, CompleteEmoji, RelatedEmojiModel, CompleteMessage, RelatedMessageModel } from "./index"

export const RoleModel = z.object({
  /**
   * Discord snowflake
   */
  id: z.string(),
  /**
   * Role name
   */
  name: z.string(),
  /**
   * Color
   * Roles without colors (color == 0) do not count towards the final computed color in the user list.
   */
  color: z.number().int(),
  /**
   * Hoist?
   */
  hoist: z.boolean(),
  /**
   * Icon
   */
  icon: z.string().nullish(),
  /**
   * Unicode emoji
   */
  unicode_emoji: z.string().nullish(),
  /**
   * Position
   */
  position: z.number().int(),
  /**
   * Permissions
   */
  permissions: z.string(),
  /**
   * Managed?
   */
  managed: z.boolean(),
  /**
   * Mentionable?
   */
  mentionable: z.boolean(),
  /**
   * Guild ID (snowflake)
   */
  guild_id: z.string(),
  guildId: z.string().nullish(),
  emojiId: z.string().nullish(),
  messageId: z.string().nullish(),
})

export interface CompleteRole extends z.infer<typeof RoleModel> {
  Guild?: CompleteGuild | null
  Emoji?: CompleteEmoji | null
  Message?: CompleteMessage | null
}

/**
 * RelatedRoleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRoleModel: z.ZodSchema<CompleteRole> = z.lazy(() => RoleModel.extend({
  /**
   * Connections
   */
  Guild: RelatedGuildModel.nullish(),
  Emoji: RelatedEmojiModel.nullish(),
  Message: RelatedMessageModel.nullish(),
}))
