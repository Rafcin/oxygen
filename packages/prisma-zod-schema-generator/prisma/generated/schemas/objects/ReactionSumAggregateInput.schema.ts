import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionSumAggregateInputType> = z
  .object({
    count: z.literal(true).optional(),
  })
  .strict();

export const ReactionSumAggregateInputObjectSchema = Schema;
