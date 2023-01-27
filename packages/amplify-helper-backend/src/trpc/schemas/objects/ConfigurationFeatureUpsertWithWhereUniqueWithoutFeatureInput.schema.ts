import { z } from 'zod'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './ConfigurationFeatureWhereUniqueInput.schema'
import { ConfigurationFeatureUpdateWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUpdateWithoutFeatureInput.schema'
import { ConfigurationFeatureUncheckedUpdateWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUncheckedUpdateWithoutFeatureInput.schema'
import { ConfigurationFeatureCreateWithoutFeatureInputObjectSchema } from './ConfigurationFeatureCreateWithoutFeatureInput.schema'
import { ConfigurationFeatureUncheckedCreateWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUncheckedCreateWithoutFeatureInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUpsertWithWhereUniqueWithoutFeatureInput> =
  z
    .object({
      where: z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ConfigurationFeatureUpdateWithoutFeatureInputObjectSchema),
        z.lazy(
          () => ConfigurationFeatureUncheckedUpdateWithoutFeatureInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => ConfigurationFeatureCreateWithoutFeatureInputObjectSchema),
        z.lazy(
          () => ConfigurationFeatureUncheckedCreateWithoutFeatureInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ConfigurationFeatureUpsertWithWhereUniqueWithoutFeatureInputObjectSchema =
  Schema
