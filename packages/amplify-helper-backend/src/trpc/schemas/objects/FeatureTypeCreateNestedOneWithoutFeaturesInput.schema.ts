import { z } from 'zod'
import { FeatureTypeCreateWithoutFeaturesInputObjectSchema } from './FeatureTypeCreateWithoutFeaturesInput.schema'
import { FeatureTypeUncheckedCreateWithoutFeaturesInputObjectSchema } from './FeatureTypeUncheckedCreateWithoutFeaturesInput.schema'
import { FeatureTypeCreateOrConnectWithoutFeaturesInputObjectSchema } from './FeatureTypeCreateOrConnectWithoutFeaturesInput.schema'
import { FeatureTypeWhereUniqueInputObjectSchema } from './FeatureTypeWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeCreateNestedOneWithoutFeaturesInput> = z
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
    connect: z.lazy(() => FeatureTypeWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const FeatureTypeCreateNestedOneWithoutFeaturesInputObjectSchema = Schema
