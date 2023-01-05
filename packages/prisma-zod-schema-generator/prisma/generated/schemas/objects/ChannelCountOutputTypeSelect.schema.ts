import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelCountOutputTypeSelect> = z
  .object({
    guilds: z.boolean().optional(),
    Message: z.boolean().optional(),
    users: z.boolean().optional(),
  })
  .strict();

export const ChannelCountOutputTypeSelectObjectSchema = Schema;
