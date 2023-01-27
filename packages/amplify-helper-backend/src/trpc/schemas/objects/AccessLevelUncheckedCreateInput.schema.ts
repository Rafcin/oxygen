import { z } from 'zod'
import { AccessLevelRoleUncheckedCreateNestedManyWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUncheckedCreateNestedManyWithoutAccessLevelInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelUncheckedCreateInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    role: z
      .lazy(
        () =>
          AccessLevelRoleUncheckedCreateNestedManyWithoutAccessLevelInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const AccessLevelUncheckedCreateInputObjectSchema = Schema
