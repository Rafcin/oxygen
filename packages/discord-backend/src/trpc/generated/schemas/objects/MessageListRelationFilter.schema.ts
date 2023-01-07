import { z } from 'zod';
import { MessageWhereInputObjectSchema } from './MessageWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageListRelationFilter> = z
  .object({
    every: z.lazy(() => MessageWhereInputObjectSchema).optional(),
    some: z.lazy(() => MessageWhereInputObjectSchema).optional(),
    none: z.lazy(() => MessageWhereInputObjectSchema).optional(),
  })
  .strict();

export const MessageListRelationFilterObjectSchema = Schema;
