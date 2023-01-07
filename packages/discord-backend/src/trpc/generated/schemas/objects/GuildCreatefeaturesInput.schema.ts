import { z } from 'zod';
import { FeaturesSchema } from '../enums/Features.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.GuildCreatefeaturesInput> = z
  .object({
    set: z.lazy(() => FeaturesSchema).array(),
  })
  .strict();

export const GuildCreatefeaturesInputObjectSchema = Schema;
