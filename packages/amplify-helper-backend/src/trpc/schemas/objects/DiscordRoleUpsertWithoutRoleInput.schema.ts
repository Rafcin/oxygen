import { z } from 'zod'
import { DiscordRoleUpdateWithoutRoleInputObjectSchema } from './DiscordRoleUpdateWithoutRoleInput.schema'
import { DiscordRoleUncheckedUpdateWithoutRoleInputObjectSchema } from './DiscordRoleUncheckedUpdateWithoutRoleInput.schema'
import { DiscordRoleCreateWithoutRoleInputObjectSchema } from './DiscordRoleCreateWithoutRoleInput.schema'
import { DiscordRoleUncheckedCreateWithoutRoleInputObjectSchema } from './DiscordRoleUncheckedCreateWithoutRoleInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUpsertWithoutRoleInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiscordRoleUpdateWithoutRoleInputObjectSchema),
      z.lazy(() => DiscordRoleUncheckedUpdateWithoutRoleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiscordRoleCreateWithoutRoleInputObjectSchema),
      z.lazy(() => DiscordRoleUncheckedCreateWithoutRoleInputObjectSchema),
    ]),
  })
  .strict()

export const DiscordRoleUpsertWithoutRoleInputObjectSchema = Schema
