import { z } from 'zod'
import { FeatureScalarWhereInputObjectSchema } from './FeatureScalarWhereInput.schema'
import { FeatureUpdateManyMutationInputObjectSchema } from './FeatureUpdateManyMutationInput.schema'
import { FeatureUncheckedUpdateManyWithoutFeaturesInputObjectSchema } from './FeatureUncheckedUpdateManyWithoutFeaturesInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureUpdateManyWithWhereWithoutTypeInput> = z
  .object({
    where: z.lazy(() => FeatureScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => FeatureUpdateManyMutationInputObjectSchema),
      z.lazy(() => FeatureUncheckedUpdateManyWithoutFeaturesInputObjectSchema),
    ]),
  })
  .strict()

export const FeatureUpdateManyWithWhereWithoutTypeInputObjectSchema = Schema
