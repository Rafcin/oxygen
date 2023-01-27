import { z } from 'zod'
import { DiscordUserCreateWithoutAccountInputObjectSchema } from './DiscordUserCreateWithoutAccountInput.schema'
import { DiscordUserUncheckedCreateWithoutAccountInputObjectSchema } from './DiscordUserUncheckedCreateWithoutAccountInput.schema'
import { DiscordUserCreateOrConnectWithoutAccountInputObjectSchema } from './DiscordUserCreateOrConnectWithoutAccountInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUncheckedCreateNestedOneWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordUserCreateWithoutAccountInputObjectSchema),
          z.lazy(() => DiscordUserUncheckedCreateWithoutAccountInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DiscordUserCreateOrConnectWithoutAccountInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const DiscordUserUncheckedCreateNestedOneWithoutAccountInputObjectSchema =
  Schema
