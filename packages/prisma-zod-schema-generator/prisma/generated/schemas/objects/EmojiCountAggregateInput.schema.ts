import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    userIds: z.literal(true).optional(),
    require_colons: z.literal(true).optional(),
    managed: z.literal(true).optional(),
    animated: z.literal(true).optional(),
    available: z.literal(true).optional(),
    guildId: z.literal(true).optional(),
    reactionIds: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const EmojiCountAggregateInputObjectSchema = Schema;
