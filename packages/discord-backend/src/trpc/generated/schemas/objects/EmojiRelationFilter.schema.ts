import { z } from 'zod';
import { EmojiWhereInputObjectSchema } from './EmojiWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiRelationFilter> = z
  .object({
    is: z
      .lazy(() => EmojiWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => EmojiWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const EmojiRelationFilterObjectSchema = Schema;
