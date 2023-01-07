import { z } from 'zod';
import { RoleCreateManyGuildInputObjectSchema } from './RoleCreateManyGuildInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateManyGuildInputEnvelope> = z
  .object({
    data: z.lazy(() => RoleCreateManyGuildInputObjectSchema).array(),
  })
  .strict();

export const RoleCreateManyGuildInputEnvelopeObjectSchema = Schema;
