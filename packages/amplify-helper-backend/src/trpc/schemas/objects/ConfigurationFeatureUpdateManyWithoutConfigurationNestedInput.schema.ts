import { z } from 'zod'
import { ConfigurationFeatureCreateWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureCreateWithoutConfigurationInput.schema'
import { ConfigurationFeatureUncheckedCreateWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUncheckedCreateWithoutConfigurationInput.schema'
import { ConfigurationFeatureCreateOrConnectWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureCreateOrConnectWithoutConfigurationInput.schema'
import { ConfigurationFeatureUpsertWithWhereUniqueWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUpsertWithWhereUniqueWithoutConfigurationInput.schema'
import { ConfigurationFeatureCreateManyConfigurationInputEnvelopeObjectSchema } from './ConfigurationFeatureCreateManyConfigurationInputEnvelope.schema'
import { ConfigurationFeatureWhereUniqueInputObjectSchema } from './ConfigurationFeatureWhereUniqueInput.schema'
import { ConfigurationFeatureUpdateWithWhereUniqueWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUpdateWithWhereUniqueWithoutConfigurationInput.schema'
import { ConfigurationFeatureUpdateManyWithWhereWithoutConfigurationInputObjectSchema } from './ConfigurationFeatureUpdateManyWithWhereWithoutConfigurationInput.schema'
import { ConfigurationFeatureScalarWhereInputObjectSchema } from './ConfigurationFeatureScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.ConfigurationFeatureUpdateManyWithoutConfigurationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ConfigurationFeatureCreateWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () => ConfigurationFeatureCreateWithoutConfigurationInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              ConfigurationFeatureUncheckedCreateWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureUncheckedCreateWithoutConfigurationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ConfigurationFeatureCreateOrConnectWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureCreateOrConnectWithoutConfigurationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ConfigurationFeatureUpsertWithWhereUniqueWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureUpsertWithWhereUniqueWithoutConfigurationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ConfigurationFeatureCreateManyConfigurationInputEnvelopeObjectSchema
        )
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
              ConfigurationFeatureUpdateWithWhereUniqueWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureUpdateWithWhereUniqueWithoutConfigurationInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ConfigurationFeatureUpdateManyWithWhereWithoutConfigurationInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ConfigurationFeatureUpdateManyWithWhereWithoutConfigurationInputObjectSchema
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

export const ConfigurationFeatureUpdateManyWithoutConfigurationNestedInputObjectSchema =
  Schema
