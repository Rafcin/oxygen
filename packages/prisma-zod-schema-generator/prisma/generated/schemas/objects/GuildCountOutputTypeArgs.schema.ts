import { z } from 'zod';
import { GuildCountOutputTypeSelectObjectSchema } from './GuildCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => GuildCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const GuildCountOutputTypeArgsObjectSchema = Schema;
