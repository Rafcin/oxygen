import { z } from 'zod'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.UserRelationFilter> = z
  .object({
    is: z.lazy(() => UserWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => UserWhereInputObjectSchema).optional(),
  })
  .strict()

export const UserRelationFilterObjectSchema = Schema