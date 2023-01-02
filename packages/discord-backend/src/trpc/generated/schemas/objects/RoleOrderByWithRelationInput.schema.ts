import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GuildOrderByWithRelationInputObjectSchema } from './GuildOrderByWithRelationInput.schema';
import { EmojiOrderByWithRelationInputObjectSchema } from './EmojiOrderByWithRelationInput.schema';
import { MessageOrderByWithRelationInputObjectSchema } from './MessageOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    color: z.lazy(() => SortOrderSchema).optional(),
    hoist: z.lazy(() => SortOrderSchema).optional(),
    icon: z.lazy(() => SortOrderSchema).optional(),
    unicode_emoji: z.lazy(() => SortOrderSchema).optional(),
    position: z.lazy(() => SortOrderSchema).optional(),
    permissions: z.lazy(() => SortOrderSchema).optional(),
    managed: z.lazy(() => SortOrderSchema).optional(),
    mentionable: z.lazy(() => SortOrderSchema).optional(),
    guild_id: z.lazy(() => SortOrderSchema).optional(),
    Guild: z.lazy(() => GuildOrderByWithRelationInputObjectSchema).optional(),
    guildId: z.lazy(() => SortOrderSchema).optional(),
    Emoji: z.lazy(() => EmojiOrderByWithRelationInputObjectSchema).optional(),
    emojiId: z.lazy(() => SortOrderSchema).optional(),
    Message: z
      .lazy(() => MessageOrderByWithRelationInputObjectSchema)
      .optional(),
    messageId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RoleOrderByWithRelationInputObjectSchema = Schema;
