import { z } from 'zod';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleListRelationFilter> = z
  .object({
    every: z.lazy(() => RoleWhereInputObjectSchema).optional(),
    some: z.lazy(() => RoleWhereInputObjectSchema).optional(),
    none: z.lazy(() => RoleWhereInputObjectSchema).optional(),
  })
  .strict();

export const RoleListRelationFilterObjectSchema = Schema;
