import { z } from 'zod'
import { FeatureTypeSelectObjectSchema } from './FeatureTypeSelect.schema'
import { FeatureTypeIncludeObjectSchema } from './FeatureTypeInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeArgs> = z
  .object({
    select: z.lazy(() => FeatureTypeSelectObjectSchema).optional(),
    include: z.lazy(() => FeatureTypeIncludeObjectSchema).optional(),
  })
  .strict()

export const FeatureTypeArgsObjectSchema = Schema
