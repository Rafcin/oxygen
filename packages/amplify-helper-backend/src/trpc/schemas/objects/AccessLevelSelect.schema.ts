import { z } from 'zod'
import { AccessLevelRoleFindManySchema } from '../findManyAccessLevelRole.schema'
import { AccessLevelCountOutputTypeArgsObjectSchema } from './AccessLevelCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelSelect> = z
  .object({
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    role: z
      .union([z.boolean(), z.lazy(() => AccessLevelRoleFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => AccessLevelCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const AccessLevelSelectObjectSchema = Schema
