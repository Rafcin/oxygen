import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FeatureInputsScalarWhereInputObjectSchema),
        z.lazy(() => FeatureInputsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FeatureInputsScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FeatureInputsScalarWhereInputObjectSchema),
        z.lazy(() => FeatureInputsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    featureCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    secure: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  })
  .strict()

export const FeatureInputsScalarWhereInputObjectSchema = Schema
