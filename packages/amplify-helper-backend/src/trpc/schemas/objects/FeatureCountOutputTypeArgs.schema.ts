import { z } from 'zod'
import { FeatureCountOutputTypeSelectObjectSchema } from './FeatureCountOutputTypeSelect.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => FeatureCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const FeatureCountOutputTypeArgsObjectSchema = Schema
