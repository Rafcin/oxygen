import { z } from 'zod'
import { FeatureTypeUpdateWithoutFeaturesInputObjectSchema } from './FeatureTypeUpdateWithoutFeaturesInput.schema'
import { FeatureTypeUncheckedUpdateWithoutFeaturesInputObjectSchema } from './FeatureTypeUncheckedUpdateWithoutFeaturesInput.schema'
import { FeatureTypeCreateWithoutFeaturesInputObjectSchema } from './FeatureTypeCreateWithoutFeaturesInput.schema'
import { FeatureTypeUncheckedCreateWithoutFeaturesInputObjectSchema } from './FeatureTypeUncheckedCreateWithoutFeaturesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeUpsertWithoutFeaturesInput> = z
  .object({
    update: z.union([
      z.lazy(() => FeatureTypeUpdateWithoutFeaturesInputObjectSchema),
      z.lazy(() => FeatureTypeUncheckedUpdateWithoutFeaturesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => FeatureTypeCreateWithoutFeaturesInputObjectSchema),
      z.lazy(() => FeatureTypeUncheckedCreateWithoutFeaturesInputObjectSchema),
    ]),
  })
  .strict()

export const FeatureTypeUpsertWithoutFeaturesInputObjectSchema = Schema
