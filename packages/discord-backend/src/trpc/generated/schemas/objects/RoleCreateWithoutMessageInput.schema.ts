import { z } from 'zod';
import { GuildCreateNestedOneWithoutRolesInputObjectSchema } from './GuildCreateNestedOneWithoutRolesInput.schema';
import { EmojiCreateNestedOneWithoutRolesInputObjectSchema } from './EmojiCreateNestedOneWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateWithoutMessageInput> = z
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
    Guild: z
      .lazy(() => GuildCreateNestedOneWithoutRolesInputObjectSchema)
      .optional(),
    Emoji: z
      .lazy(() => EmojiCreateNestedOneWithoutRolesInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleCreateWithoutMessageInputObjectSchema = Schema;
