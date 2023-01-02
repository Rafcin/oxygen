import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiCountOutputTypeSelect> = z
  .object({
    roles: z.boolean().optional(),
    users: z.boolean().optional(),
    reactions: z.boolean().optional(),
  })
  .strict();

export const EmojiCountOutputTypeSelectObjectSchema = Schema;
