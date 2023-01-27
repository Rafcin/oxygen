import { z } from 'zod'
import { FeatureTypeCreateWithoutFeaturesInputObjectSchema } from './FeatureTypeCreateWithoutFeaturesInput.schema'
import { FeatureTypeUncheckedCreateWithoutFeaturesInputObjectSchema } from './FeatureTypeUncheckedCreateWithoutFeaturesInput.schema'
import { FeatureTypeCreateOrConnectWithoutFeaturesInputObjectSchema } from './FeatureTypeCreateOrConnectWithoutFeaturesInput.schema'
import { FeatureTypeUpsertWithoutFeaturesInputObjectSchema } from './FeatureTypeUpsertWithoutFeaturesInput.schema'
import { FeatureTypeWhereUniqueInputObjectSchema } from './FeatureTypeWhereUniqueInput.schema'
import { FeatureTypeUpdateWithoutFeaturesInputObjectSchema } from './FeatureTypeUpdateWithoutFeaturesInput.schema'
import { FeatureTypeUncheckedUpdateWithoutFeaturesInputObjectSchema } from './FeatureTypeUncheckedUpdateWithoutFeaturesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeUpdateOneRequiredWithoutFeaturesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FeatureTypeCreateWithoutFeaturesInputObjectSchema),
          z.lazy(() => FeatureTypeUncheckedCreateWithoutFeaturesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => FeatureTypeCreateOrConnectWithoutFeaturesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => FeatureTypeUpsertWithoutFeaturesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => FeatureTypeWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => FeatureTypeUpdateWithoutFeaturesInputObjectSchema),
          z.lazy(() => FeatureTypeUncheckedUpdateWithoutFeaturesInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const FeatureTypeUpdateOneRequiredWithoutFeaturesNestedInputObjectSchema =
  Schema
