import { z } from 'zod'
import { DiscordRoleCreateWithoutRoleInputObjectSchema } from './DiscordRoleCreateWithoutRoleInput.schema'
import { DiscordRoleUncheckedCreateWithoutRoleInputObjectSchema } from './DiscordRoleUncheckedCreateWithoutRoleInput.schema'
import { DiscordRoleCreateOrConnectWithoutRoleInputObjectSchema } from './DiscordRoleCreateOrConnectWithoutRoleInput.schema'
import { DiscordRoleUpsertWithoutRoleInputObjectSchema } from './DiscordRoleUpsertWithoutRoleInput.schema'
import { DiscordRoleWhereUniqueInputObjectSchema } from './DiscordRoleWhereUniqueInput.schema'
import { DiscordRoleUpdateWithoutRoleInputObjectSchema } from './DiscordRoleUpdateWithoutRoleInput.schema'
import { DiscordRoleUncheckedUpdateWithoutRoleInputObjectSchema } from './DiscordRoleUncheckedUpdateWithoutRoleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUpdateOneRequiredWithoutRoleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordRoleCreateWithoutRoleInputObjectSchema),
          z.lazy(() => DiscordRoleUncheckedCreateWithoutRoleInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DiscordRoleCreateOrConnectWithoutRoleInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => DiscordRoleUpsertWithoutRoleInputObjectSchema).optional(),
      connect: z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DiscordRoleUpdateWithoutRoleInputObjectSchema),
          z.lazy(() => DiscordRoleUncheckedUpdateWithoutRoleInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const DiscordRoleUpdateOneRequiredWithoutRoleNestedInputObjectSchema = Schema
