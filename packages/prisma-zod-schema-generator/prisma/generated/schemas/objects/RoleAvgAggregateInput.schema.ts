import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleAvgAggregateInputType> = z
  .object({
    color: z.literal(true).optional(),
    position: z.literal(true).optional(),
  })
  .strict();

export const RoleAvgAggregateInputObjectSchema = Schema;