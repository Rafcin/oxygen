import { z } from 'zod'
import { AccessLevelCreateWithoutRoleInputObjectSchema } from './AccessLevelCreateWithoutRoleInput.schema'
import { AccessLevelUncheckedCreateWithoutRoleInputObjectSchema } from './AccessLevelUncheckedCreateWithoutRoleInput.schema'
import { AccessLevelCreateOrConnectWithoutRoleInputObjectSchema } from './AccessLevelCreateOrConnectWithoutRoleInput.schema'
import { AccessLevelWhereUniqueInputObjectSchema } from './AccessLevelWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelCreateNestedOneWithoutRoleInput> = z
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
    connect: z.lazy(() => AccessLevelWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AccessLevelCreateNestedOneWithoutRoleInputObjectSchema = Schema
