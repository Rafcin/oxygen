import { z } from 'zod';
import { MessageCountOutputTypeSelectObjectSchema } from './MessageCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => MessageCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const MessageCountOutputTypeArgsObjectSchema = Schema;
