import { z } from 'zod';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z
  .object({
    id: z.string().optional(),
    identifier: z.string(),
    token: z.string(),
    expires: z.date(),
  })
  .strict();

export const VerificationTokenCreateManyInputObjectSchema = Schema;
