import { z } from 'zod'
import { AccessLevelWhereInputObjectSchema } from './AccessLevelWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRelationFilter> = z
  .object({
    is: z.lazy(() => AccessLevelWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => AccessLevelWhereInputObjectSchema).optional(),
  })
  .strict()

export const AccessLevelRelationFilterObjectSchema = Schema
