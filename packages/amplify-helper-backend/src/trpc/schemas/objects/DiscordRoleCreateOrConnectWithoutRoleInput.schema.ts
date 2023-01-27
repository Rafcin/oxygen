import { z } from 'zod'
import { DiscordRoleWhereUniqueInputObjectSchema } from './DiscordRoleWhereUniqueInput.schema'
import { DiscordRoleCreateWithoutRoleInputObjectSchema } from './DiscordRoleCreateWithoutRoleInput.schema'
import { DiscordRoleUncheckedCreateWithoutRoleInputObjectSchema } from './DiscordRoleUncheckedCreateWithoutRoleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleCreateOrConnectWithoutRoleInput> = z
  .object({
    where: z.lazy(() => DiscordRoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiscordRoleCreateWithoutRoleInputObjectSchema),
      z.lazy(() => DiscordRoleUncheckedCreateWithoutRoleInputObjectSchema),
    ]),
  })
  .strict()

export const DiscordRoleCreateOrConnectWithoutRoleInputObjectSchema = Schema
