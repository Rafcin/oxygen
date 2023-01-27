import { z } from 'zod'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleUpdateWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUpdateWithoutAccessLevelInput.schema'
import { AccessLevelRoleUncheckedUpdateWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUncheckedUpdateWithoutAccessLevelInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleUpdateWithWhereUniqueWithoutAccessLevelInput> =
  z
    .object({
      where: z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AccessLevelRoleUpdateWithoutAccessLevelInputObjectSchema),
        z.lazy(
          () => AccessLevelRoleUncheckedUpdateWithoutAccessLevelInputObjectSchema
        ),
      ]),
    })
    .strict()

export const AccessLevelRoleUpdateWithWhereUniqueWithoutAccessLevelInputObjectSchema =
  Schema
