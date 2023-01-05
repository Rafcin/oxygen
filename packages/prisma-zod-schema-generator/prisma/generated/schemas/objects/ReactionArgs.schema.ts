import { z } from 'zod';
import { ReactionSelectObjectSchema } from './ReactionSelect.schema';
import { ReactionIncludeObjectSchema } from './ReactionInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionArgs> = z
  .object({
    select: z.lazy(() => ReactionSelectObjectSchema).optional(),
    include: z.lazy(() => ReactionIncludeObjectSchema).optional(),
  })
  .strict();

export const ReactionArgsObjectSchema = Schema;
