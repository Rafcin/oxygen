import { z } from 'zod';
import { SessionCreateManyUserInputObjectSchema } from './SessionCreateManyUserInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => SessionCreateManyUserInputObjectSchema).array(),
  })
  .strict();

export const SessionCreateManyUserInputEnvelopeObjectSchema = Schema;
