import { z } from 'zod';
import { GuildWhereInputObjectSchema } from './GuildWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildListRelationFilter> = z
  .object({
    every: z.lazy(() => GuildWhereInputObjectSchema).optional(),
    some: z.lazy(() => GuildWhereInputObjectSchema).optional(),
    none: z.lazy(() => GuildWhereInputObjectSchema).optional(),
  })
  .strict();

export const GuildListRelationFilterObjectSchema = Schema;
