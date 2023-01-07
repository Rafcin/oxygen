import { z } from 'zod';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildCreatechannelIdsInput> = z
  .object({
    set: z.string().array(),
  })
  .strict();

export const GuildCreatechannelIdsInputObjectSchema = Schema;
