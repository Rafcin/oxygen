import { z } from 'zod'
import { FeatureInputsCreateWithoutFeatureInputObjectSchema } from './FeatureInputsCreateWithoutFeatureInput.schema'
import { FeatureInputsUncheckedCreateWithoutFeatureInputObjectSchema } from './FeatureInputsUncheckedCreateWithoutFeatureInput.schema'
import { FeatureInputsCreateOrConnectWithoutFeatureInputObjectSchema } from './FeatureInputsCreateOrConnectWithoutFeatureInput.schema'
import { FeatureInputsUpsertWithWhereUniqueWithoutFeatureInputObjectSchema } from './FeatureInputsUpsertWithWhereUniqueWithoutFeatureInput.schema'
import { FeatureInputsCreateManyFeatureInputEnvelopeObjectSchema } from './FeatureInputsCreateManyFeatureInputEnvelope.schema'
import { FeatureInputsWhereUniqueInputObjectSchema } from './FeatureInputsWhereUniqueInput.schema'
import { FeatureInputsUpdateWithWhereUniqueWithoutFeatureInputObjectSchema } from './FeatureInputsUpdateWithWhereUniqueWithoutFeatureInput.schema'
import { FeatureInputsUpdateManyWithWhereWithoutFeatureInputObjectSchema } from './FeatureInputsUpdateManyWithWhereWithoutFeatureInput.schema'
import { FeatureInputsScalarWhereInputObjectSchema } from './FeatureInputsScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsUpdateManyWithoutFeatureNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => FeatureInputsCreateWithoutFeatureInputObjectSchema),
        z.lazy(() => FeatureInputsCreateWithoutFeatureInputObjectSchema).array(),
        z.lazy(() => FeatureInputsUncheckedCreateWithoutFeatureInputObjectSchema),
        z
          .lazy(() => FeatureInputsUncheckedCreateWithoutFeatureInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => FeatureInputsCreateOrConnectWithoutFeatureInputObjectSchema),
        z
          .lazy(() => FeatureInputsCreateOrConnectWithoutFeatureInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => FeatureInputsUpsertWithWhereUniqueWithoutFeatureInputObjectSchema
        ),
        z
          .lazy(
            () => FeatureInputsUpsertWithWhereUniqueWithoutFeatureInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => FeatureInputsCreateManyFeatureInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema),
        z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema),
        z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema),
        z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema),
        z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => FeatureInputsUpdateWithWhereUniqueWithoutFeatureInputObjectSchema
        ),
        z
          .lazy(
            () => FeatureInputsUpdateWithWhereUniqueWithoutFeatureInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => FeatureInputsUpdateManyWithWhereWithoutFeatureInputObjectSchema
        ),
        z
          .lazy(
            () => FeatureInputsUpdateManyWithWhereWithoutFeatureInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => FeatureInputsScalarWhereInputObjectSchema),
        z.lazy(() => FeatureInputsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const FeatureInputsUpdateManyWithoutFeatureNestedInputObjectSchema = Schema
