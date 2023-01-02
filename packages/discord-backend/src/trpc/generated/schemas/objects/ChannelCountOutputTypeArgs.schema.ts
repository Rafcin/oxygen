import { z } from 'zod';
import { ChannelCountOutputTypeSelectObjectSchema } from './ChannelCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => ChannelCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const ChannelCountOutputTypeArgsObjectSchema = Schema;
