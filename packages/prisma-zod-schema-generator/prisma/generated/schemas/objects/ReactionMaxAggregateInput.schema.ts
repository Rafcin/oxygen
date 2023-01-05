import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReactionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    count: z.literal(true).optional(),
  })
  .strict();

export const ReactionMaxAggregateInputObjectSchema = Schema;
