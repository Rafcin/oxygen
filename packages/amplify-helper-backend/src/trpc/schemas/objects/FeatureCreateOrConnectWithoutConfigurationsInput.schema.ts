import { z } from 'zod'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'
import { FeatureCreateWithoutConfigurationsInputObjectSchema } from './FeatureCreateWithoutConfigurationsInput.schema'
import { FeatureUncheckedCreateWithoutConfigurationsInputObjectSchema } from './FeatureUncheckedCreateWithoutConfigurationsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureCreateOrConnectWithoutConfigurationsInput> = z
  .object({
    where: z.lazy(() => FeatureWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FeatureCreateWithoutConfigurationsInputObjectSchema),
      z.lazy(() => FeatureUncheckedCreateWithoutConfigurationsInputObjectSchema),
    ]),
  })
  .strict()

export const FeatureCreateOrConnectWithoutConfigurationsInputObjectSchema = Schema
