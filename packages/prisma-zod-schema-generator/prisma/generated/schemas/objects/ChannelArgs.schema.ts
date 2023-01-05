import { z } from 'zod';
import { ChannelSelectObjectSchema } from './ChannelSelect.schema';
import { ChannelIncludeObjectSchema } from './ChannelInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelArgs> = z
  .object({
    select: z.lazy(() => ChannelSelectObjectSchema).optional(),
    include: z.lazy(() => ChannelIncludeObjectSchema).optional(),
  })
  .strict();

export const ChannelArgsObjectSchema = Schema;
