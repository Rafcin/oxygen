import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageAvgAggregateInputType> = z
  .object({
    message_type: z.literal(true).optional(),
    flags: z.literal(true).optional(),
    position: z.literal(true).optional(),
  })
  .strict();

export const MessageAvgAggregateInputObjectSchema = Schema;
