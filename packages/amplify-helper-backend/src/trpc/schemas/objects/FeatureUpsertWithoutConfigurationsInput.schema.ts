import { z } from 'zod'
import { FeatureUpdateWithoutConfigurationsInputObjectSchema } from './FeatureUpdateWithoutConfigurationsInput.schema'
import { FeatureUncheckedUpdateWithoutConfigurationsInputObjectSchema } from './FeatureUncheckedUpdateWithoutConfigurationsInput.schema'
import { FeatureCreateWithoutConfigurationsInputObjectSchema } from './FeatureCreateWithoutConfigurationsInput.schema'
import { FeatureUncheckedCreateWithoutConfigurationsInputObjectSchema } from './FeatureUncheckedCreateWithoutConfigurationsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureUpsertWithoutConfigurationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => FeatureUpdateWithoutConfigurationsInputObjectSchema),
      z.lazy(() => FeatureUncheckedUpdateWithoutConfigurationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => FeatureCreateWithoutConfigurationsInputObjectSchema),
      z.lazy(() => FeatureUncheckedCreateWithoutConfigurationsInputObjectSchema),
    ]),
  })
  .strict()

export const FeatureUpsertWithoutConfigurationsInputObjectSchema = Schema
