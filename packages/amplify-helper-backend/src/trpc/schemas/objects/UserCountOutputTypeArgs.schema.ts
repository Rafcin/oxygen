import { z } from 'zod'
import { UserCountOutputTypeSelectObjectSchema } from './UserCountOutputTypeSelect.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.UserCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => UserCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const UserCountOutputTypeArgsObjectSchema = Schema
