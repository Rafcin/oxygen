import { z } from 'zod'
import { FeatureTypeWhereUniqueInputObjectSchema } from './FeatureTypeWhereUniqueInput.schema'
import { FeatureTypeCreateWithoutFeaturesInputObjectSchema } from './FeatureTypeCreateWithoutFeaturesInput.schema'
import { FeatureTypeUncheckedCreateWithoutFeaturesInputObjectSchema } from './FeatureTypeUncheckedCreateWithoutFeaturesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeCreateOrConnectWithoutFeaturesInput> = z
  .object({
    where: z.lazy(() => FeatureTypeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FeatureTypeCreateWithoutFeaturesInputObjectSchema),
      z.lazy(() => FeatureTypeUncheckedCreateWithoutFeaturesInputObjectSchema),
    ]),
  })
  .strict()

export const FeatureTypeCreateOrConnectWithoutFeaturesInputObjectSchema = Schema
