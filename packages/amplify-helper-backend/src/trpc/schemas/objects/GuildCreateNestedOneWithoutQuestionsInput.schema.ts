import { z } from 'zod'
import { GuildCreateWithoutQuestionsInputObjectSchema } from './GuildCreateWithoutQuestionsInput.schema'
import { GuildUncheckedCreateWithoutQuestionsInputObjectSchema } from './GuildUncheckedCreateWithoutQuestionsInput.schema'
import { GuildCreateOrConnectWithoutQuestionsInputObjectSchema } from './GuildCreateOrConnectWithoutQuestionsInput.schema'
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildCreateNestedOneWithoutQuestionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => GuildCreateWithoutQuestionsInputObjectSchema),
        z.lazy(() => GuildUncheckedCreateWithoutQuestionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => GuildCreateOrConnectWithoutQuestionsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => GuildWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const GuildCreateNestedOneWithoutQuestionsInputObjectSchema = Schema
