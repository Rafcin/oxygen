import { z } from 'zod';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.UserWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    email: z.string().optional(),
  })
  .strict();

export const UserWhereUniqueInputObjectSchema = Schema;
