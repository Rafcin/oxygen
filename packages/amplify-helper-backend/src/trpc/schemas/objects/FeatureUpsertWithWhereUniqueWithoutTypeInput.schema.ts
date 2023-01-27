import { z } from 'zod'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'
import { FeatureUpdateWithoutTypeInputObjectSchema } from './FeatureUpdateWithoutTypeInput.schema'
import { FeatureUncheckedUpdateWithoutTypeInputObjectSchema } from './FeatureUncheckedUpdateWithoutTypeInput.schema'
import { FeatureCreateWithoutTypeInputObjectSchema } from './FeatureCreateWithoutTypeInput.schema'
import { FeatureUncheckedCreateWithoutTypeInputObjectSchema } from './FeatureUncheckedCreateWithoutTypeInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureUpsertWithWhereUniqueWithoutTypeInput> = z
  .object({
    where: z.lazy(() => FeatureWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => FeatureUpdateWithoutTypeInputObjectSchema),
      z.lazy(() => FeatureUncheckedUpdateWithoutTypeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => FeatureCreateWithoutTypeInputObjectSchema),
      z.lazy(() => FeatureUncheckedCreateWithoutTypeInputObjectSchema),
    ]),
  })
  .strict()

export const FeatureUpsertWithWhereUniqueWithoutTypeInputObjectSchema = Schema
