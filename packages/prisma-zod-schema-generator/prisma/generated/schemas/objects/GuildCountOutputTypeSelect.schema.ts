import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildCountOutputTypeSelect> = z
  .object({
    roles: z.boolean().optional(),
    emojis: z.boolean().optional(),
    users: z.boolean().optional(),
    channels: z.boolean().optional(),
  })
  .strict();

export const GuildCountOutputTypeSelectObjectSchema = Schema;
