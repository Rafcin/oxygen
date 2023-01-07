import { z } from 'zod';
import { AccountCreateManyUserInputObjectSchema } from './AccountCreateManyUserInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => AccountCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const AccountCreateManyUserInputEnvelopeObjectSchema = Schema;
