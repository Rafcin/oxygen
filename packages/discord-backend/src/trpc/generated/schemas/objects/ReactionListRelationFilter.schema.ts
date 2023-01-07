import { z } from 'zod';
import { ReactionWhereInputObjectSchema } from './ReactionWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ReactionListRelationFilter> = z
  .object({
    every: z.lazy(() => ReactionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ReactionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ReactionWhereInputObjectSchema).optional(),
  })
  .strict();

export const ReactionListRelationFilterObjectSchema = Schema;
