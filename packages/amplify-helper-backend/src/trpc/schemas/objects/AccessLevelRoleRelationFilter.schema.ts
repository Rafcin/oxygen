import { z } from 'zod'
import { AccessLevelRoleWhereInputObjectSchema } from './AccessLevelRoleWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleRelationFilter> = z
  .object({
    is: z
      .lazy(() => AccessLevelRoleWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => AccessLevelRoleWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const AccessLevelRoleRelationFilterObjectSchema = Schema
