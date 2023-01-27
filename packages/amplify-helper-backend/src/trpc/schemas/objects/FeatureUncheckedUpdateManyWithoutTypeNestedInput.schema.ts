import { z } from 'zod'
import { FeatureCreateWithoutTypeInputObjectSchema } from './FeatureCreateWithoutTypeInput.schema'
import { FeatureUncheckedCreateWithoutTypeInputObjectSchema } from './FeatureUncheckedCreateWithoutTypeInput.schema'
import { FeatureCreateOrConnectWithoutTypeInputObjectSchema } from './FeatureCreateOrConnectWithoutTypeInput.schema'
import { FeatureUpsertWithWhereUniqueWithoutTypeInputObjectSchema } from './FeatureUpsertWithWhereUniqueWithoutTypeInput.schema'
import { FeatureCreateManyTypeInputEnvelopeObjectSchema } from './FeatureCreateManyTypeInputEnvelope.schema'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'
import { FeatureUpdateWithWhereUniqueWithoutTypeInputObjectSchema } from './FeatureUpdateWithWhereUniqueWithoutTypeInput.schema'
import { FeatureUpdateManyWithWhereWithoutTypeInputObjectSchema } from './FeatureUpdateManyWithWhereWithoutTypeInput.schema'
import { FeatureScalarWhereInputObjectSchema } from './FeatureScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureUncheckedUpdateManyWithoutTypeNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => FeatureCreateWithoutTypeInputObjectSchema),
        z.lazy(() => FeatureCreateWithoutTypeInputObjectSchema).array(),
        z.lazy(() => FeatureUncheckedCreateWithoutTypeInputObjectSchema),
        z.lazy(() => FeatureUncheckedCreateWithoutTypeInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => FeatureCreateOrConnectWithoutTypeInputObjectSchema),
        z.lazy(() => FeatureCreateOrConnectWithoutTypeInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => FeatureUpsertWithWhereUniqueWithoutTypeInputObjectSchema),
        z
          .lazy(() => FeatureUpsertWithWhereUniqueWithoutTypeInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => FeatureCreateManyTypeInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => FeatureWhereUniqueInputObjectSchema),
        z.lazy(() => FeatureWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => FeatureWhereUniqueInputObjectSchema),
        z.lazy(() => FeatureWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => FeatureWhereUniqueInputObjectSchema),
        z.lazy(() => FeatureWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => FeatureWhereUniqueInputObjectSchema),
        z.lazy(() => FeatureWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => FeatureUpdateWithWhereUniqueWithoutTypeInputObjectSchema),
        z
          .lazy(() => FeatureUpdateWithWhereUniqueWithoutTypeInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => FeatureUpdateManyWithWhereWithoutTypeInputObjectSchema),
        z.lazy(() => FeatureUpdateManyWithWhereWithoutTypeInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => FeatureScalarWhereInputObjectSchema),
        z.lazy(() => FeatureScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const FeatureUncheckedUpdateManyWithoutTypeNestedInputObjectSchema = Schema
