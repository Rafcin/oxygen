import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionCountOutputTypeSelect> = z
  .object({
    emojis: z.boolean().optional(),
    messages: z.boolean().optional(),
  })
  .strict();

export const ReactionCountOutputTypeSelectObjectSchema = Schema;
