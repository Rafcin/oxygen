import { z } from 'zod'
import { FeatureCreateWithoutConfigurationsInputObjectSchema } from './FeatureCreateWithoutConfigurationsInput.schema'
import { FeatureUncheckedCreateWithoutConfigurationsInputObjectSchema } from './FeatureUncheckedCreateWithoutConfigurationsInput.schema'
import { FeatureCreateOrConnectWithoutConfigurationsInputObjectSchema } from './FeatureCreateOrConnectWithoutConfigurationsInput.schema'
import { FeatureUpsertWithoutConfigurationsInputObjectSchema } from './FeatureUpsertWithoutConfigurationsInput.schema'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'
import { FeatureUpdateWithoutConfigurationsInputObjectSchema } from './FeatureUpdateWithoutConfigurationsInput.schema'
import { FeatureUncheckedUpdateWithoutConfigurationsInputObjectSchema } from './FeatureUncheckedUpdateWithoutConfigurationsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureUpdateOneRequiredWithoutConfigurationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FeatureCreateWithoutConfigurationsInputObjectSchema),
          z.lazy(() => FeatureUncheckedCreateWithoutConfigurationsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => FeatureCreateOrConnectWithoutConfigurationsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => FeatureUpsertWithoutConfigurationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => FeatureWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => FeatureUpdateWithoutConfigurationsInputObjectSchema),
          z.lazy(() => FeatureUncheckedUpdateWithoutConfigurationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const FeatureUpdateOneRequiredWithoutConfigurationsNestedInputObjectSchema =
  Schema
