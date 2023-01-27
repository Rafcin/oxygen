import { z } from 'zod'
import { AccessLevelRoleScalarWhereInputObjectSchema } from './AccessLevelRoleScalarWhereInput.schema'
import { AccessLevelRoleUpdateManyMutationInputObjectSchema } from './AccessLevelRoleUpdateManyMutationInput.schema'
import { AccessLevelRoleUncheckedUpdateManyWithoutRoleInputObjectSchema } from './AccessLevelRoleUncheckedUpdateManyWithoutRoleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleUpdateManyWithWhereWithoutAccessLevelInput> =
  z
    .object({
      where: z.lazy(() => AccessLevelRoleScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AccessLevelRoleUpdateManyMutationInputObjectSchema),
        z.lazy(() => AccessLevelRoleUncheckedUpdateManyWithoutRoleInputObjectSchema),
      ]),
    })
    .strict()

export const AccessLevelRoleUpdateManyWithWhereWithoutAccessLevelInputObjectSchema =
  Schema
