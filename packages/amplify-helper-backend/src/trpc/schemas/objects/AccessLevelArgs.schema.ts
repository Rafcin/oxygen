import { z } from 'zod'
import { AccessLevelSelectObjectSchema } from './AccessLevelSelect.schema'
import { AccessLevelIncludeObjectSchema } from './AccessLevelInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelArgs> = z
  .object({
    select: z.lazy(() => AccessLevelSelectObjectSchema).optional(),
    include: z.lazy(() => AccessLevelIncludeObjectSchema).optional(),
  })
  .strict()

export const AccessLevelArgsObjectSchema = Schema
