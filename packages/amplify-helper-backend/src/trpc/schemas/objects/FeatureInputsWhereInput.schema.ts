import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { FeatureRelationFilterObjectSchema } from './FeatureRelationFilter.schema'
import { FeatureWhereInputObjectSchema } from './FeatureWhereInput.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FeatureInputsWhereInputObjectSchema),
        z.lazy(() => FeatureInputsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FeatureInputsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FeatureInputsWhereInputObjectSchema),
        z.lazy(() => FeatureInputsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    feature: z
      .union([
        z.lazy(() => FeatureRelationFilterObjectSchema),
        z.lazy(() => FeatureWhereInputObjectSchema),
      ])
      .optional(),
    featureCode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    secure: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  })
  .strict()

export const FeatureInputsWhereInputObjectSchema = Schema
