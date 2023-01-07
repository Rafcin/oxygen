import { z } from 'zod';
import { FeaturesSchema } from '../enums/Features.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildUpdatefeaturesInput> = z
  .object({
    set: z
      .lazy(() => FeaturesSchema)
      .array()
      .optional(),
    push: z
      .union([
        z.lazy(() => FeaturesSchema),
        z.lazy(() => FeaturesSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const GuildUpdatefeaturesInputObjectSchema = Schema;
