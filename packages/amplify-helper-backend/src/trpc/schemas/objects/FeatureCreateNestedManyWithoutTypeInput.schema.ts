import { z } from 'zod'
import { FeatureCreateWithoutTypeInputObjectSchema } from './FeatureCreateWithoutTypeInput.schema'
import { FeatureUncheckedCreateWithoutTypeInputObjectSchema } from './FeatureUncheckedCreateWithoutTypeInput.schema'
import { FeatureCreateOrConnectWithoutTypeInputObjectSchema } from './FeatureCreateOrConnectWithoutTypeInput.schema'
import { FeatureCreateManyTypeInputEnvelopeObjectSchema } from './FeatureCreateManyTypeInputEnvelope.schema'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureCreateNestedManyWithoutTypeInput> = z
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
    createMany: z
      .lazy(() => FeatureCreateManyTypeInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => FeatureWhereUniqueInputObjectSchema),
        z.lazy(() => FeatureWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const FeatureCreateNestedManyWithoutTypeInputObjectSchema = Schema
