import { z } from 'zod';
import { ReactionCountOutputTypeSelectObjectSchema } from './ReactionCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ReactionCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ReactionCountOutputTypeArgsObjectSchema = Schema;
