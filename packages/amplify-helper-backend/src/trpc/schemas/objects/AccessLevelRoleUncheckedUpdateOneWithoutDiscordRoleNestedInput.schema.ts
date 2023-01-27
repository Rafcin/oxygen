import { z } from 'zod'
import { AccessLevelRoleCreateWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleCreateWithoutDiscordRoleInput.schema'
import { AccessLevelRoleUncheckedCreateWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleUncheckedCreateWithoutDiscordRoleInput.schema'
import { AccessLevelRoleCreateOrConnectWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleCreateOrConnectWithoutDiscordRoleInput.schema'
import { AccessLevelRoleUpsertWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleUpsertWithoutDiscordRoleInput.schema'
import { AccessLevelRoleWhereUniqueInputObjectSchema } from './AccessLevelRoleWhereUniqueInput.schema'
import { AccessLevelRoleUpdateWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleUpdateWithoutDiscordRoleInput.schema'
import { AccessLevelRoleUncheckedUpdateWithoutDiscordRoleInputObjectSchema } from './AccessLevelRoleUncheckedUpdateWithoutDiscordRoleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccessLevelRoleUncheckedUpdateOneWithoutDiscordRoleNestedInput> =
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
      upsert: z
        .lazy(() => AccessLevelRoleUpsertWithoutDiscordRoleInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => AccessLevelRoleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => AccessLevelRoleUpdateWithoutDiscordRoleInputObjectSchema),
          z.lazy(
            () => AccessLevelRoleUncheckedUpdateWithoutDiscordRoleInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const AccessLevelRoleUncheckedUpdateOneWithoutDiscordRoleNestedInputObjectSchema =
  Schema
