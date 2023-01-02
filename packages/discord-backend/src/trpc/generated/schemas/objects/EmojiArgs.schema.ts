import { z } from 'zod';
import { EmojiSelectObjectSchema } from './EmojiSelect.schema';
import { EmojiIncludeObjectSchema } from './EmojiInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiArgs> = z
  .object({
    select: z.lazy(() => EmojiSelectObjectSchema).optional(),
    include: z.lazy(() => EmojiIncludeObjectSchema).optional(),
  })
  .strict();

export const EmojiArgsObjectSchema = Schema;
