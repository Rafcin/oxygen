import { z } from 'zod'
import { DiscordUserUpdateWithoutAnswersInputObjectSchema } from './DiscordUserUpdateWithoutAnswersInput.schema'
import { DiscordUserUncheckedUpdateWithoutAnswersInputObjectSchema } from './DiscordUserUncheckedUpdateWithoutAnswersInput.schema'
import { DiscordUserCreateWithoutAnswersInputObjectSchema } from './DiscordUserCreateWithoutAnswersInput.schema'
import { DiscordUserUncheckedCreateWithoutAnswersInputObjectSchema } from './DiscordUserUncheckedCreateWithoutAnswersInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserUpsertWithoutAnswersInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiscordUserUpdateWithoutAnswersInputObjectSchema),
      z.lazy(() => DiscordUserUncheckedUpdateWithoutAnswersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiscordUserCreateWithoutAnswersInputObjectSchema),
      z.lazy(() => DiscordUserUncheckedCreateWithoutAnswersInputObjectSchema),
    ]),
  })
  .strict()

export const DiscordUserUpsertWithoutAnswersInputObjectSchema = Schema
