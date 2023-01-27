import { z } from 'zod'
import { FeatureSelectObjectSchema } from './FeatureSelect.schema'
import { FeatureIncludeObjectSchema } from './FeatureInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureArgs> = z
  .object({
    select: z.lazy(() => FeatureSelectObjectSchema).optional(),
    include: z.lazy(() => FeatureIncludeObjectSchema).optional(),
  })
  .strict()

export const FeatureArgsObjectSchema = Schema
