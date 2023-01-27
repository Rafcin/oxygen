import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { AccessLevelRoleListRelationFilterObjectSchema } from './AccessLevelRoleListRelationFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccessLevelWhereInputObjectSchema),
        z.lazy(() => AccessLevelWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccessLevelWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccessLevelWhereInputObjectSchema),
        z.lazy(() => AccessLevelWhereInputObjectSchema).array(),
      ])
      .optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    role: z.lazy(() => AccessLevelRoleListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const AccessLevelWhereInputObjectSchema = Schema
