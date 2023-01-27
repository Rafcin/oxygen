import { z } from 'zod'
import { DiscordUserCreateWithoutAnswersInputObjectSchema } from './DiscordUserCreateWithoutAnswersInput.schema'
import { DiscordUserUncheckedCreateWithoutAnswersInputObjectSchema } from './DiscordUserUncheckedCreateWithoutAnswersInput.schema'
import { DiscordUserCreateOrConnectWithoutAnswersInputObjectSchema } from './DiscordUserCreateOrConnectWithoutAnswersInput.schema'
import { DiscordUserUpsertWithoutAnswersInputObjectSchema } from './DiscordUserUpsertWithoutAnswersInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'
import { DiscordUserUpdateWithoutAnswersInputObjectSchema } from './DiscordUserUpdateWithoutAnswersInput.schema'
import { DiscordUserUncheckedUpdateWithoutAnswersInputObjectSchema } from './DiscordUserUncheckedUpdateWithoutAnswersInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpdateOneRequiredWithoutAnswersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiscordUserCreateWithoutAnswersInputObjectSchema),
          z.lazy(() => DiscordUserUncheckedCreateWithoutAnswersInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DiscordUserCreateOrConnectWithoutAnswersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => DiscordUserUpsertWithoutAnswersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DiscordUserUpdateWithoutAnswersInputObjectSchema),
          z.lazy(() => DiscordUserUncheckedUpdateWithoutAnswersInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const DiscordUserUpdateOneRequiredWithoutAnswersNestedInputObjectSchema =
  Schema
