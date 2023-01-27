import { z } from 'zod'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'
import { DiscordUserCreateWithoutAccountInputObjectSchema } from './DiscordUserCreateWithoutAccountInput.schema'
import { DiscordUserUncheckedCreateWithoutAccountInputObjectSchema } from './DiscordUserUncheckedCreateWithoutAccountInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateOrConnectWithoutAccountInput> = z
  .object({
    where: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiscordUserCreateWithoutAccountInputObjectSchema),
      z.lazy(() => DiscordUserUncheckedCreateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict()

export const DiscordUserCreateOrConnectWithoutAccountInputObjectSchema = Schema
