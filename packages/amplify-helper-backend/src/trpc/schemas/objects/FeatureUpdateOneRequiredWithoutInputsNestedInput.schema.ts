import { z } from 'zod'
import { FeatureCreateWithoutInputsInputObjectSchema } from './FeatureCreateWithoutInputsInput.schema'
import { FeatureUncheckedCreateWithoutInputsInputObjectSchema } from './FeatureUncheckedCreateWithoutInputsInput.schema'
import { FeatureCreateOrConnectWithoutInputsInputObjectSchema } from './FeatureCreateOrConnectWithoutInputsInput.schema'
import { FeatureUpsertWithoutInputsInputObjectSchema } from './FeatureUpsertWithoutInputsInput.schema'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'
import { FeatureUpdateWithoutInputsInputObjectSchema } from './FeatureUpdateWithoutInputsInput.schema'
import { FeatureUncheckedUpdateWithoutInputsInputObjectSchema } from './FeatureUncheckedUpdateWithoutInputsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureUpdateOneRequiredWithoutInputsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => FeatureCreateWithoutInputsInputObjectSchema),
        z.lazy(() => FeatureUncheckedCreateWithoutInputsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => FeatureCreateOrConnectWithoutInputsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => FeatureUpsertWithoutInputsInputObjectSchema).optional(),
    connect: z.lazy(() => FeatureWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => FeatureUpdateWithoutInputsInputObjectSchema),
        z.lazy(() => FeatureUncheckedUpdateWithoutInputsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const FeatureUpdateOneRequiredWithoutInputsNestedInputObjectSchema = Schema
