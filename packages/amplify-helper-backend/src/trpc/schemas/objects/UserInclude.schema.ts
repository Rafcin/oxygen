import { z } from 'zod'
import { AccountFindManySchema } from '../findManyAccount.schema'
import { SessionFindManySchema } from '../findManySession.schema'
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const UserIncludeObjectSchema = Schema
