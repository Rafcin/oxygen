import { z } from 'zod'
import { ConfigurationFeatureCreateWithoutFeatureInputObjectSchema } from './ConfigurationFeatureCreateWithoutFeatureInput.schema'
import { ConfigurationFeatureUncheckedCreateWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUncheckedCreateWithoutFeatureInput.schema'
import { ConfigurationFeatureCreateOrConnectWithoutFeatureInputObjectSchema } from './ConfigurationFeatureCreateOrConnectWithoutFeatureInput.schema'
import { ConfigurationFeatureUpsertWithWhereUniqueWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUpsertWithWhereUniqueWithoutFeatureInput.schema'
import { ConfigurationFeatureCreateManyFeatureInputEnvelopeObjectSchema } from './ConfigurationFeatureCreateManyFeatureInputEnvelope.schema'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './ConfigurationFeatureWhereUniqueInput.schema'
import { ConfigurationFeatureUpdateWithWhereUniqueWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUpdateWithWhereUniqueWithoutFeatureInput.schema'
import { ConfigurationFeatureUpdateManyWithWhereWithoutFeatureInputObjectSchema } from './ConfigurationFeatureUpdateManyWithWhereWithoutFeatureInput.schema'
import { ConfigurationFeatureScalarWhereInputObjectSchema } from './ConfigurationFeatureScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUpdateManyWithoutFeatureNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ConfigurationFeatureUpsertWithWhereUniqueWithoutFeatureInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureUpsertWithWhereUniqueWithoutFeatureInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ConfigurationFeatureCreateManyFeatureInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema),
          z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema),
          z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema),
          z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema),
          z.lazy(() => ConfigurationFeatureWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ConfigurationFeatureUpdateWithWhereUniqueWithoutFeatureInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureUpdateWithWhereUniqueWithoutFeatureInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ConfigurationFeatureUpdateManyWithWhereWithoutFeatureInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureUpdateManyWithWhereWithoutFeatureInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ConfigurationFeatureScalarWhereInputObjectSchema),
          z.lazy(() => ConfigurationFeatureScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const ConfigurationFeatureUpdateManyWithoutFeatureNestedInputObjectSchema =
  Schema
