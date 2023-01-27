import { z } from 'zod'
import { ConfigurationFeatureScalarWhereInputObjectSchema } from './ConfigurationFeatureScalarWhereInput.schema'
import { ConfigurationFeatureUpdateManyMutationInputObjectSchema } from './ConfigurationFeatureUpdateManyMutationInput.schema'
import { ConfigurationFeatureUncheckedUpdateManyWithoutFeaturesInputObjectSchema } from './ConfigurationFeatureUncheckedUpdateManyWithoutFeaturesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUpdateManyWithWhereWithoutConfigurationInput> =
  z
    .object({
      where: z.lazy(() => ConfigurationFeatureScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ConfigurationFeatureUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ConfigurationFeatureUncheckedUpdateManyWithoutFeaturesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ConfigurationFeatureUpdateManyWithWhereWithoutConfigurationInputObjectSchema =
  Schema
