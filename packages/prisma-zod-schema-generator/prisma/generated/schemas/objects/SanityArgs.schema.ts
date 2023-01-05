import { z } from 'zod';
import { SanitySelectObjectSchema } from './SanitySelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SanityArgs> = z
  .object({
    select: z.lazy(() => SanitySelectObjectSchema).optional(),
  })
  .strict();

export const SanityArgsObjectSchema = Schema;
