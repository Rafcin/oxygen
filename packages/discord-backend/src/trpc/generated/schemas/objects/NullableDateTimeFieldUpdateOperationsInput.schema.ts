import { z } from 'zod';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z
  .object({
    set: z.date().optional().nullable(),
    unset: z.boolean().optional(),
  })
  .strict();

export const NullableDateTimeFieldUpdateOperationsInputObjectSchema = Schema;
