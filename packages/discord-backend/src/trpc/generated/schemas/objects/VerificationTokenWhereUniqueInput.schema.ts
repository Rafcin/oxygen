import { z } from 'zod';
import { VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema } from './VerificationTokenIdentifierTokenCompoundUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    token: z.string().optional(),
    identifier_token: z
      .lazy(
        () => VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const VerificationTokenWhereUniqueInputObjectSchema = Schema;
