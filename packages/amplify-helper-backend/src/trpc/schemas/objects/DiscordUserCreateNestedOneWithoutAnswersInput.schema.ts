import { z } from 'zod'
import { DiscordUserCreateWithoutAnswersInputObjectSchema } from './DiscordUserCreateWithoutAnswersInput.schema'
import { DiscordUserUncheckedCreateWithoutAnswersInputObjectSchema } from './DiscordUserUncheckedCreateWithoutAnswersInput.schema'
import { DiscordUserCreateOrConnectWithoutAnswersInputObjectSchema } from './DiscordUserCreateOrConnectWithoutAnswersInput.schema'
import { DiscordUserWhereUniqueInputObjectSchema } from './DiscordUserWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordUserCreateNestedOneWithoutAnswersInput> = z
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
    connect: z.lazy(() => DiscordUserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const DiscordUserCreateNestedOneWithoutAnswersInputObjectSchema = Schema
