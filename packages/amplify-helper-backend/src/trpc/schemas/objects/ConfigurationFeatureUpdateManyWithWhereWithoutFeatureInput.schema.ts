import { z } from 'zod'
import { ConfigurationFeatureScalarWhereInputObjectSchema } from './ConfigurationFeatureScalarWhereInput.schema'
import { ConfigurationFeatureUpdateManyMutationInputObjectSchema } from './ConfigurationFeatureUpdateManyMutationInput.schema'
import { ConfigurationFeatureUncheckedUpdateManyWithoutConfigurationsInputObjectSchema } from './ConfigurationFeatureUncheckedUpdateManyWithoutConfigurationsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUpdateManyWithWhereWithoutFeatureInput> =
  z
    .object({
      where: z.lazy(() => ConfigurationFeatureScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ConfigurationFeatureUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ConfigurationFeatureUncheckedUpdateManyWithoutConfigurationsInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ConfigurationFeatureUpdateManyWithWhereWithoutFeatureInputObjectSchema =
  Schema
