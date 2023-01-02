import { z } from 'zod';
import { RoleSelectObjectSchema } from './RoleSelect.schema';
import { RoleIncludeObjectSchema } from './RoleInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleArgs> = z
  .object({
    select: z.lazy(() => RoleSelectObjectSchema).optional(),
    include: z.lazy(() => RoleIncludeObjectSchema).optional(),
  })
  .strict();

export const RoleArgsObjectSchema = Schema;
