import { z } from 'zod';
import { GuildWhereInputObjectSchema } from './GuildWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildRelationFilter> = z
  .object({
    is: z
      .lazy(() => GuildWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => GuildWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const GuildRelationFilterObjectSchema = Schema;
