import { z } from 'zod';
import { MessageSelectObjectSchema } from './MessageSelect.schema';
import { MessageIncludeObjectSchema } from './MessageInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageArgs> = z
  .object({
    select: z.lazy(() => MessageSelectObjectSchema).optional(),
    include: z.lazy(() => MessageIncludeObjectSchema).optional(),
  })
  .strict();

export const MessageArgsObjectSchema = Schema;
