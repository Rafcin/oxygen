import { z } from 'zod';
import { GuildCreateNestedOneWithoutRolesInputObjectSchema } from './GuildCreateNestedOneWithoutRolesInput.schema';
import { MessageCreateNestedOneWithoutMention_rolesInputObjectSchema } from './MessageCreateNestedOneWithoutMention_rolesInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateWithoutEmojiInput> = z
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
    Guild: z.lazy(() => GuildCreateNestedOneWithoutRolesInputObjectSchema),
    Message: z
      .lazy(() => MessageCreateNestedOneWithoutMention_rolesInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleCreateWithoutEmojiInputObjectSchema = Schema;
