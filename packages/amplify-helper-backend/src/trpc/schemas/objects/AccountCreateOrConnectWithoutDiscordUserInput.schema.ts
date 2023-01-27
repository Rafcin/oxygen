import { z } from 'zod'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'
import { AccountCreateWithoutDiscordUserInputObjectSchema } from './AccountCreateWithoutDiscordUserInput.schema'
import { AccountUncheckedCreateWithoutDiscordUserInputObjectSchema } from './AccountUncheckedCreateWithoutDiscordUserInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccountCreateOrConnectWithoutDiscordUserInput> = z
  .object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AccountCreateWithoutDiscordUserInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutDiscordUserInputObjectSchema),
    ]),
  })
  .strict()

export const AccountCreateOrConnectWithoutDiscordUserInputObjectSchema = Schema
