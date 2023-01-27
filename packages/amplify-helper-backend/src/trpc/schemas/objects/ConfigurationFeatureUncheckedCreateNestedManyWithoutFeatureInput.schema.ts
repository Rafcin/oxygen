import { z } from 'zod'
import { ConfigurationFeatureCreateWithoutFeatureInputObjectSchema } from './ConfigurationFeatureCreateWithoutFeatureInput.schema'
import { ConfigurationFeatureUncheckedCreateWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUncheckedCreateWithoutFeatureInput.schema'
import { ConfigurationFeatureCreateOrConnectWithoutFeatureInputObjectSchema } from './ConfigurationFeatureCreateOrConnectWithoutFeatureInput.schema'
import { ConfigurationFeatureCreateManyFeatureInputEnvelopeObjectSchema } from './ConfigurationFeatureCreateManyFeatureInputEnvelope.schema'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './ConfigurationFeatureWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUncheckedCreateNestedManyWithoutFeatureInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ConfigurationFeatureCreateWithoutFeatureInputObjectSchema),
          z
            .lazy(() => ConfigurationFeatureCreateWithoutFeatureInputObjectSchema)
            .array(),
          z.lazy(
            () => ConfigurationFeatureUncheckedCreateWithoutFeatureInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureUncheckedCreateWithoutFeatureInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ConfigurationFeatureCreateOrConnectWithoutFeatureInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureCreateOrConnectWithoutFeatureInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ConfigurationFeatureCreateManyFeatureInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema),
          z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const ConfigurationFeatureUncheckedCreateNestedManyWithoutFeatureInputObjectSchema =
  Schema
