import { z } from 'zod'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './ConfigurationFeatureWhereUniqueInput.schema'
import { ConfigurationFeatureUpdateWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUpdateWithoutFeatureInput.schema'
import { ConfigurationFeatureUncheckedUpdateWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUncheckedUpdateWithoutFeatureInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUpdateWithWhereUniqueWithoutFeatureInput> =
  z
    .object({
      where: z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ConfigurationFeatureUpdateWithoutFeatureInputObjectSchema),
        z.lazy(
          () => ConfigurationFeatureUncheckedUpdateWithoutFeatureInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ConfigurationFeatureUpdateWithWhereUniqueWithoutFeatureInputObjectSchema =
  Schema
