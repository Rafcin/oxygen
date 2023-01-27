import { z } from 'zod'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleUpdateWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUpdateWithoutAccessLevelInput.schema'
import { AccessLevelRoleUncheckedUpdateWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUncheckedUpdateWithoutAccessLevelInput.schema'
import { AccessLevelRoleCreateWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleCreateWithoutAccessLevelInput.schema'
import { AccessLevelRoleUncheckedCreateWithoutAccessLevelInputObjectSchema } from './AccessLevelRoleUncheckedCreateWithoutAccessLevelInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleUpsertWithWhereUniqueWithoutAccessLevelInput> =
  z
    .object({
      where: z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AccessLevelRoleUpdateWithoutAccessLevelInputObjectSchema),
        z.lazy(
          () => AccessLevelRoleUncheckedUpdateWithoutAccessLevelInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => AccessLevelRoleCreateWithoutAccessLevelInputObjectSchema),
        z.lazy(
          () => AccessLevelRoleUncheckedCreateWithoutAccessLevelInputObjectSchema
        ),
      ]),
    })
    .strict()

export const AccessLevelRoleUpsertWithWhereUniqueWithoutAccessLevelInputObjectSchema =
  Schema
