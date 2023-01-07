import { z } from 'zod';
import { RoleCreateManyMessageInputObjectSchema } from './RoleCreateManyMessageInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateManyMessageInputEnvelope> = z
  .object({
    data: z.lazy(() => RoleCreateManyMessageInputObjectSchema).array(),
  })
  .strict();

export const RoleCreateManyMessageInputEnvelopeObjectSchema = Schema;
