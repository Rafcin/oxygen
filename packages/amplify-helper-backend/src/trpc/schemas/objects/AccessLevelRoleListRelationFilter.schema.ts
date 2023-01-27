import { z } from 'zod'
import { AccessLevelRoleWhereInputObjectSchema } from './AccessLevelRoleWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleListRelationFilter> = z
  .object({
    every: z.lazy(() => AccessLevelRoleWhereInputObjectSchema).optional(),
    some: z.lazy(() => AccessLevelRoleWhereInputObjectSchema).optional(),
    none: z.lazy(() => AccessLevelRoleWhereInputObjectSchema).optional(),
  })
  .strict()

export const AccessLevelRoleListRelationFilterObjectSchema = Schema
