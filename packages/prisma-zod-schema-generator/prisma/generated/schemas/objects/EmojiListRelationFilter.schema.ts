import { z } from 'zod';
import { EmojiWhereInputObjectSchema } from './EmojiWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiListRelationFilter> = z
  .object({
    every: z.lazy(() => EmojiWhereInputObjectSchema).optional(),
    some: z.lazy(() => EmojiWhereInputObjectSchema).optional(),
    none: z.lazy(() => EmojiWhereInputObjectSchema).optional(),
  })
  .strict();

export const EmojiListRelationFilterObjectSchema = Schema;
