import { z } from 'zod'
import { DiscordUserUpdateWithoutAccountInputObjectSchema } from './DiscordUserUpdateWithoutAccountInput.schema'
import { DiscordUserUncheckedUpdateWithoutAccountInputObjectSchema } from './DiscordUserUncheckedUpdateWithoutAccountInput.schema'
import { DiscordUserCreateWithoutAccountInputObjectSchema } from './DiscordUserCreateWithoutAccountInput.schema'
import { DiscordUserUncheckedCreateWithoutAccountInputObjectSchema } from './DiscordUserUncheckedCreateWithoutAccountInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpsertWithoutAccountInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiscordUserUpdateWithoutAccountInputObjectSchema),
      z.lazy(() => DiscordUserUncheckedUpdateWithoutAccountInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiscordUserCreateWithoutAccountInputObjectSchema),
      z.lazy(() => DiscordUserUncheckedCreateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict()

export const DiscordUserUpsertWithoutAccountInputObjectSchema = Schema
