import { z } from 'zod'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'
import { DiscordUserCreateWithoutAnswersInputObjectSchema } from './DiscordUserCreateWithoutAnswersInput.schema'
import { DiscordUserUncheckedCreateWithoutAnswersInputObjectSchema } from './DiscordUserUncheckedCreateWithoutAnswersInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateOrConnectWithoutAnswersInput> = z
  .object({
    where: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiscordUserCreateWithoutAnswersInputObjectSchema),
      z.lazy(() => DiscordUserUncheckedCreateWithoutAnswersInputObjectSchema),
    ]),
  })
  .strict()

export const DiscordUserCreateOrConnectWithoutAnswersInputObjectSchema = Schema
