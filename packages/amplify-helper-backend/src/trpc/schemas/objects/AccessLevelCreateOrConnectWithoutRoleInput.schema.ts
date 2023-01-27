import { z } from 'zod'
import { AccessLevelWhereUniqueInputObjectSchema } from './AccessLevelWhereUniqueInput.schema'
import { AccessLevelCreateWithoutRoleInputObjectSchema } from './AccessLevelCreateWithoutRoleInput.schema'
import { AccessLevelUncheckedCreateWithoutRoleInputObjectSchema } from './AccessLevelUncheckedCreateWithoutRoleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelCreateOrConnectWithoutRoleInput> = z
  .object({
    where: z.lazy(() => AccessLevelWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AccessLevelCreateWithoutRoleInputObjectSchema),
      z.lazy(() => AccessLevelUncheckedCreateWithoutRoleInputObjectSchema),
    ]),
  })
  .strict()

export const AccessLevelCreateOrConnectWithoutRoleInputObjectSchema = Schema
