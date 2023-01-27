import { z } from 'zod'
import { FeatureTypeCountOutputTypeSelectObjectSchema } from './FeatureTypeCountOutputTypeSelect.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.FeatureTypeCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => FeatureTypeCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const FeatureTypeCountOutputTypeArgsObjectSchema = Schema
