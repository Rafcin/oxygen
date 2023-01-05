import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSumAggregateInputType> = z
  .object({
    accent_color: z.literal(true).optional(),
    flags: z.literal(true).optional(),
    premium_class: z.literal(true).optional(),
    public_flags: z.literal(true).optional(),
  })
  .strict();

export const UserSumAggregateInputObjectSchema = Schema;
