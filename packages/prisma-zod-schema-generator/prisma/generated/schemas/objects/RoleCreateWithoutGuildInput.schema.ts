import { z } from 'zod';
import { EmojiCreateNestedOneWithoutRolesInputObjectSchema } from './EmojiCreateNestedOneWithoutRolesInput.schema';
import { MessageCreateNestedOneWithoutMention_rolesInputObjectSchema } from './MessageCreateNestedOneWithoutMention_rolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateWithoutGuildInput> = z
  .object({
    id: z.string(),
    name: z.string(),
    color: z.number(),
    hoist: z.boolean(),
    icon: z.string().optional().nullable(),
    unicode_emoji: z.string().optional().nullable(),
    position: z.number(),
    permissions: z.string(),
    managed: z.boolean(),
    mentionable: z.boolean(),
    guild_id: z.string(),
    Emoji: z
      .lazy(() => EmojiCreateNestedOneWithoutRolesInputObjectSchema)
      .optional(),
    Message: z
      .lazy(() => MessageCreateNestedOneWithoutMention_rolesInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleCreateWithoutGuildInputObjectSchema = Schema;
