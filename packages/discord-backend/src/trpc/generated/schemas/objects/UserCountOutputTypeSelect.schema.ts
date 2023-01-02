import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z
  .object({
    guilds: z.boolean().optional(),
    emojis: z.boolean().optional(),
    Messages: z.boolean().optional(),
    channels: z.boolean().optional(),
  })
  .strict();

export const UserCountOutputTypeSelectObjectSchema = Schema;
