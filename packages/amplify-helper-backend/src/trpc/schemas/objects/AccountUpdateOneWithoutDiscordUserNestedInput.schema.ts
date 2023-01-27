import { z } from 'zod'
import { AccountCreateWithoutDiscordUserInputObjectSchema } from './AccountCreateWithoutDiscordUserInput.schema'
import { AccountUncheckedCreateWithoutDiscordUserInputObjectSchema } from './AccountUncheckedCreateWithoutDiscordUserInput.schema'
import { AccountCreateOrConnectWithoutDiscordUserInputObjectSchema } from './AccountCreateOrConnectWithoutDiscordUserInput.schema'
import { AccountUpsertWithoutDiscordUserInputObjectSchema } from './AccountUpsertWithoutDiscordUserInput.schema'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'
import { AccountUpdateWithoutDiscordUserInputObjectSchema } from './AccountUpdateWithoutDiscordUserInput.schema'
import { AccountUncheckedUpdateWithoutDiscordUserInputObjectSchema } from './AccountUncheckedUpdateWithoutDiscordUserInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AccountUpdateOneWithoutDiscordUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutDiscordUserInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutDiscordUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AccountCreateOrConnectWithoutDiscordUserInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => AccountUpsertWithoutDiscordUserInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AccountUpdateWithoutDiscordUserInputObjectSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutDiscordUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const AccountUpdateOneWithoutDiscordUserNestedInputObjectSchema = Schema
