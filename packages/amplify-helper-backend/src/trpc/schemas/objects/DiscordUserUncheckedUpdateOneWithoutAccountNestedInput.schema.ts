import { z } from 'zod'
import { DiscordUserCreateWithoutAccountInputObjectSchema } from './DiscordUserCreateWithoutAccountInput.schema'
import { DiscordUserUncheckedCreateWithoutAccountInputObjectSchema } from './DiscordUserUncheckedCreateWithoutAccountInput.schema'
import { DiscordUserCreateOrConnectWithoutAccountInputObjectSchema } from './DiscordUserCreateOrConnectWithoutAccountInput.schema'
import { DiscordUserUpsertWithoutAccountInputObjectSchema } from './DiscordUserUpsertWithoutAccountInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'
import { DiscordUserUpdateWithoutAccountInputObjectSchema } from './DiscordUserUpdateWithoutAccountInput.schema'
import { DiscordUserUncheckedUpdateWithoutAccountInputObjectSchema } from './DiscordUserUncheckedUpdateWithoutAccountInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUncheckedUpdateOneWithoutAccountNestedInput> =
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
      upsert: z
        .lazy(() => DiscordUserUpsertWithoutAccountInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DiscordUserUpdateWithoutAccountInputObjectSchema),
          z.lazy(() => DiscordUserUncheckedUpdateWithoutAccountInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const DiscordUserUncheckedUpdateOneWithoutAccountNestedInputObjectSchema =
  Schema
