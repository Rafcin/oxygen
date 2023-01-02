import { z } from 'zod';
import { FeaturesSchema } from '../enums/Features.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumFeaturesNullableListFilter> = z
  .object({
    equals: z
      .lazy(() => FeaturesSchema)
      .array()
      .optional()
      .nullable(),
    has: z
      .lazy(() => FeaturesSchema)
      .optional()
      .nullable(),
    hasEvery: z
      .lazy(() => FeaturesSchema)
      .array()
      .optional(),
    hasSome: z
      .lazy(() => FeaturesSchema)
      .array()
      .optional(),
    isEmpty: z.boolean().optional(),
  })
  .strict();

export const EnumFeaturesNullableListFilterObjectSchema = Schema;
