import { z } from 'zod';
import { GuildArgsObjectSchema } from './GuildArgs.schema';
import { EmojiArgsObjectSchema } from './EmojiArgs.schema';
import { MessageArgsObjectSchema } from './MessageArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    color: z.boolean().optional(),
    hoist: z.boolean().optional(),
    icon: z.boolean().optional(),
    unicode_emoji: z.boolean().optional(),
    position: z.boolean().optional(),
    permissions: z.boolean().optional(),
    managed: z.boolean().optional(),
    mentionable: z.boolean().optional(),
    guild_id: z.boolean().optional(),
    Guild: z
      .union([z.boolean(), z.lazy(() => GuildArgsObjectSchema)])
      .optional(),
    guildId: z.boolean().optional(),
    Emoji: z
      .union([z.boolean(), z.lazy(() => EmojiArgsObjectSchema)])
      .optional(),
    emojiId: z.boolean().optional(),
    Message: z
      .union([z.boolean(), z.lazy(() => MessageArgsObjectSchema)])
      .optional(),
    messageId: z.boolean().optional(),
  })
  .strict();

export const RoleSelectObjectSchema = Schema;
