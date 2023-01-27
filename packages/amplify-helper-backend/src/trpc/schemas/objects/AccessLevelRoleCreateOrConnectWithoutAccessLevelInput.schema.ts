import { z } from 'zod'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleCreateWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleCreateWithoutAccessLevelInput.schema'
import { AccessLevelRoleUncheckedCreateWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUncheckedCreateWithoutAccessLevelInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleCreateOrConnectWithoutAccessLevelInput> =
  z
    .object({
      where: z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AccessLevelRoleCreateWithoutAccessLevelInputObjectSchema),
        z.lazy(
          () => AccessLevelRoleUncheckedCreateWithoutAccessLevelInputObjectSchema
        ),
      ]),
    })
    .strict()

export const AccessLevelRoleCreateOrConnectWithoutAccessLevelInputObjectSchema =
  Schema
