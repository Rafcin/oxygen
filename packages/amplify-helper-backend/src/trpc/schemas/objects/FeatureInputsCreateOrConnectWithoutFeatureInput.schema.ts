import { z } from 'zod'
import { FeatureInputsWhereUniqueInputObjectSchema } from './FeatureInputsWhereUniqueInput.schema'
import { FeatureInputsCreateWithoutFeatureInputObjectSchema } from './FeatureInputsCreateWithoutFeatureInput.schema'
import { FeatureInputsUncheckedCreateWithoutFeatureInputObjectSchema } from './FeatureInputsUncheckedCreateWithoutFeatureInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsCreateOrConnectWithoutFeatureInput> = z
  .object({
    where: z.lazy(() => FeatureInputsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FeatureInputsCreateWithoutFeatureInputObjectSchema),
      z.lazy(() => FeatureInputsUncheckedCreateWithoutFeatureInputObjectSchema),
    ]),
  })
  .strict()

export const FeatureInputsCreateOrConnectWithoutFeatureInputObjectSchema = Schema
