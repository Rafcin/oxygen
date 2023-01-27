import { z } from 'zod'
import { AccountUpdateWithoutDiscordUserInputObjectSchema } from './AccountUpdateWithoutDiscordUserInput.schema'
import { AccountUncheckedUpdateWithoutDiscordUserInputObjectSchema } from './AccountUncheckedUpdateWithoutDiscordUserInput.schema'
import { AccountCreateWithoutDiscordUserInputObjectSchema } from './AccountCreateWithoutDiscordUserInput.schema'
import { AccountUncheckedCreateWithoutDiscordUserInputObjectSchema } from './AccountUncheckedCreateWithoutDiscordUserInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccountUpsertWithoutDiscordUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => AccountUpdateWithoutDiscordUserInputObjectSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutDiscordUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AccountCreateWithoutDiscordUserInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutDiscordUserInputObjectSchema),
    ]),
  })
  .strict()

export const AccountUpsertWithoutDiscordUserInputObjectSchema = Schema
