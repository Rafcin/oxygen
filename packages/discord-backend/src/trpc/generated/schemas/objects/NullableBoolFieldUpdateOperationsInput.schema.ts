import { z } from 'zod';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z
  .object({
    set: z.boolean().optional().nullable(),
    unset: z.boolean().optional(),
  })
  .strict();

export const NullableBoolFieldUpdateOperationsInputObjectSchema = Schema;
