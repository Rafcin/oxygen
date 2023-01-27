import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccessLevelRoleScalarWhereInputObjectSchema),
        z.lazy(() => AccessLevelRoleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccessLevelRoleScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccessLevelRoleScalarWhereInputObjectSchema),
        z.lazy(() => AccessLevelRoleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    accessLevelId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    configurationId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    discordRoleId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const AccessLevelRoleScalarWhereInputObjectSchema = Schema
