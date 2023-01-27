import { z } from 'zod'
import { FeatureInputsCreateWithoutFeatureInputObjectSchema } from './FeatureInputsCreateWithoutFeatureInput.schema'
import { FeatureInputsUncheckedCreateWithoutFeatureInputObjectSchema } from './FeatureInputsUncheckedCreateWithoutFeatureInput.schema'
import { FeatureInputsCreateOrConnectWithoutFeatureInputObjectSchema } from './FeatureInputsCreateOrConnectWithoutFeatureInput.schema'
import { FeatureInputsCreateManyFeatureInputEnvelopeObjectSchema } from './FeatureInputsCreateManyFeatureInputEnvelope.schema'
import { FeatureInputsWhereUniqueInputObjectSchema } from './FeatureInputsWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsUncheckedCreateNestedManyWithoutFeatureInput> =
  z
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
      createMany: z
        .lazy(() => FeatureInputsCreateManyFeatureInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema),
          z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const FeatureInputsUncheckedCreateNestedManyWithoutFeatureInputObjectSchema =
  Schema
