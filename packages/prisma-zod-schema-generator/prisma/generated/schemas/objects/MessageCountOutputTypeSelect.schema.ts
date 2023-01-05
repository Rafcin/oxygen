import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCountOutputTypeSelect> = z
  .object({
    mention_roles: z.boolean().optional(),
    reactions: z.boolean().optional(),
    users: z.boolean().optional(),
    channels: z.boolean().optional(),
  })
  .strict();

export const MessageCountOutputTypeSelectObjectSchema = Schema;
