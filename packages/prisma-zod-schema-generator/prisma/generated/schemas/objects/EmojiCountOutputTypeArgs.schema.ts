import { z } from 'zod';
import { EmojiCountOutputTypeSelectObjectSchema } from './EmojiCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => EmojiCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const EmojiCountOutputTypeArgsObjectSchema = Schema;
