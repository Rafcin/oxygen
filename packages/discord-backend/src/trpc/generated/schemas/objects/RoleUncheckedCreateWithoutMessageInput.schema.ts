import { z } from 'zod';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateWithoutMessageInput> = z
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
    guildId: z.string(),
    emojiId: z.string().optional().nullable(),
  })
  .strict();

export const RoleUncheckedCreateWithoutMessageInputObjectSchema = Schema;
