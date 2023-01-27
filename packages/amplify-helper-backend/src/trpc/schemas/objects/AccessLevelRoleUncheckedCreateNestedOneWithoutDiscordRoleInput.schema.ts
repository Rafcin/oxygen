import { z } from 'zod'
import { AccessLevelRoleCreateWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleCreateWithoutDiscordRoleInput.schema'
import { AccessLevelRoleUncheckedCreateWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleUncheckedCreateWithoutDiscordRoleInput.schema'
import { AccessLevelRoleCreateOrConnectWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleCreateOrConnectWithoutDiscordRoleInput.schema'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleUncheckedCreateNestedOneWithoutDiscordRoleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccessLevelRoleCreateWithoutDiscordRoleInputObjectSchema),
          z.lazy(
            () => AccessLevelRoleUncheckedCreateWithoutDiscordRoleInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => AccessLevelRoleCreateOrConnectWithoutDiscordRoleInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const AccessLevelRoleUncheckedCreateNestedOneWithoutDiscordRoleInputObjectSchema =
  Schema
