import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    color: z.literal(true).optional(),
    hoist: z.literal(true).optional(),
    icon: z.literal(true).optional(),
    unicode_emoji: z.literal(true).optional(),
    position: z.literal(true).optional(),
    permissions: z.literal(true).optional(),
    managed: z.literal(true).optional(),
    mentionable: z.literal(true).optional(),
    guild_id: z.literal(true).optional(),
    guildId: z.literal(true).optional(),
    emojiId: z.literal(true).optional(),
    messageId: z.literal(true).optional(),
  })
  .strict();

export const RoleMaxAggregateInputObjectSchema = Schema;
