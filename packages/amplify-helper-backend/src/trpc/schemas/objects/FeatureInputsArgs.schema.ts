import { z } from 'zod'
import { FeatureInputsSelectObjectSchema } from './FeatureInputsSelect.schema'
import { FeatureInputsIncludeObjectSchema } from './FeatureInputsInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureInputsArgs> = z
  .object({
    select: z.lazy(() => FeatureInputsSelectObjectSchema).optional(),
    include: z.lazy(() => FeatureInputsIncludeObjectSchema).optional(),
  })
  .strict()

export const FeatureInputsArgsObjectSchema = Schema
