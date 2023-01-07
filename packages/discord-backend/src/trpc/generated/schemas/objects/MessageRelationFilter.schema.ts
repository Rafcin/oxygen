import { z } from 'zod';
import { MessageWhereInputObjectSchema } from './MessageWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageRelationFilter> = z
  .object({
    is: z
      .lazy(() => MessageWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MessageWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MessageRelationFilterObjectSchema = Schema;
