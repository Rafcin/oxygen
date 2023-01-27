import { z } from 'zod'
import { FeatureCreateNestedOneWithoutInputsInputObjectSchema } from './FeatureCreateNestedOneWithoutInputsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    feature: z.lazy(() => FeatureCreateNestedOneWithoutInputsInputObjectSchema),
    name: z.string(),
    secure: z.boolean().optional(),
  })
  .strict()

export const FeatureInputsCreateInputObjectSchema = Schema
