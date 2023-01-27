import { z } from 'zod'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './ConfigurationFeatureWhereUniqueInput.schema'
import { ConfigurationFeatureCreateWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureCreateWithoutConfigurationInput.schema'
import { ConfigurationFeatureUncheckedCreateWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUncheckedCreateWithoutConfigurationInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureCreateOrConnectWithoutConfigurationInput> =
  z
    .object({
      where: z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => ConfigurationFeatureCreateWithoutConfigurationInputObjectSchema
        ),
        z.lazy(
          () =>
            ConfigurationFeatureUncheckedCreateWithoutConfigurationInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ConfigurationFeatureCreateOrConnectWithoutConfigurationInputObjectSchema =
  Schema
