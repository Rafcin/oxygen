import { z } from 'zod'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleCreateWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleCreateWithoutDiscordRoleInput.schema'
import { AccessLevelRoleUncheckedCreateWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleUncheckedCreateWithoutDiscordRoleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleCreateOrConnectWithoutDiscordRoleInput> =
  z
    .object({
      where: z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AccessLevelRoleCreateWithoutDiscordRoleInputObjectSchema),
        z.lazy(
          () => AccessLevelRoleUncheckedCreateWithoutDiscordRoleInputObjectSchema
        ),
      ]),
    })
    .strict()

export const AccessLevelRoleCreateOrConnectWithoutDiscordRoleInputObjectSchema =
  Schema
