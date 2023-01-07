import { z } from 'zod';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.SanityUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    isSane: z.boolean().optional(),
  })
  .strict();

export const SanityUncheckedCreateInputObjectSchema = Schema;
