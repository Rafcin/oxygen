import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    require_colons: z.literal(true).optional(),
    managed: z.literal(true).optional(),
    animated: z.literal(true).optional(),
    available: z.literal(true).optional(),
    guildId: z.literal(true).optional(),
  })
  .strict();

export const EmojiMinAggregateInputObjectSchema = Schema;
