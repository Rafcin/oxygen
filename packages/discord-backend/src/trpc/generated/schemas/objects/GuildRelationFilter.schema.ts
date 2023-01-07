import { z } from 'zod';
import { GuildWhereInputObjectSchema } from './GuildWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildRelationFilter> = z
  .object({
    is: z.lazy(() => GuildWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => GuildWhereInputObjectSchema).optional(),
  })
  .strict();

export const GuildRelationFilterObjectSchema = Schema;
