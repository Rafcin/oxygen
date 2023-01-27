import { z } from 'zod'
import { AccessLevelCreateWithoutRoleInputObjectSchema } from './AccessLevelCreateWithoutRoleInput.schema'
import { AccessLevelUncheckedCreateWithoutRoleInputObjectSchema } from './AccessLevelUncheckedCreateWithoutRoleInput.schema'
import { AccessLevelCreateOrConnectWithoutRoleInputObjectSchema } from './AccessLevelCreateOrConnectWithoutRoleInput.schema'
import { AccessLevelUpsertWithoutRoleInputObjectSchema } from './AccessLevelUpsertWithoutRoleInput.schema'
import { AccessLevelWhereUniqueInputObjectSchema } from './AccessLevelWhereUniqueInput.schema'
import { AccessLevelUpdateWithoutRoleInputObjectSchema } from './AccessLevelUpdateWithoutRoleInput.schema'
import { AccessLevelUncheckedUpdateWithoutRoleInputObjectSchema } from './AccessLevelUncheckedUpdateWithoutRoleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelUpdateOneRequiredWithoutRoleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccessLevelCreateWithoutRoleInputObjectSchema),
          z.lazy(() => AccessLevelUncheckedCreateWithoutRoleInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AccessLevelCreateOrConnectWithoutRoleInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => AccessLevelUpsertWithoutRoleInputObjectSchema).optional(),
      connect: z.lazy(() => AccessLevelWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => AccessLevelUpdateWithoutRoleInputObjectSchema),
          z.lazy(() => AccessLevelUncheckedUpdateWithoutRoleInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const AccessLevelUpdateOneRequiredWithoutRoleNestedInputObjectSchema = Schema
