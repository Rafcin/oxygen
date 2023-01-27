import { z } from 'zod'
import { DiscordRoleCreateWithoutRoleInputObjectSchema } from './DiscordRoleCreateWithoutRoleInput.schema'
import { DiscordRoleUncheckedCreateWithoutRoleInputObjectSchema } from './DiscordRoleUncheckedCreateWithoutRoleInput.schema'
import { DiscordRoleCreateOrConnectWithoutRoleInputObjectSchema } from './DiscordRoleCreateOrConnectWithoutRoleInput.schema'
import { DiscordRoleWhereUniqueInputObjectSchema } from './DiscordRoleWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleCreateNestedOneWithoutRoleInput> = z
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
    connect: z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const DiscordRoleCreateNestedOneWithoutRoleInputObjectSchema = Schema
