import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleSumAggregateInputType> = z
  .object({
    color: z.literal(true).optional(),
    position: z.literal(true).optional(),
  })
  .strict();

export const RoleSumAggregateInputObjectSchema = Schema;
