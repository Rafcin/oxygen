import { z } from 'zod'
import { GuildCreateWithoutQuestionsInputObjectSchema } from './GuildCreateWithoutQuestionsInput.schema'
import { GuildUncheckedCreateWithoutQuestionsInputObjectSchema } from './GuildUncheckedCreateWithoutQuestionsInput.schema'
import { GuildCreateOrConnectWithoutQuestionsInputObjectSchema } from './GuildCreateOrConnectWithoutQuestionsInput.schema'
import { GuildUpsertWithoutQuestionsInputObjectSchema } from './GuildUpsertWithoutQuestionsInput.schema'
import { GuildWhereUniqueInputObjectSchema } from './GuildWhereUniqueInput.schema'
import { GuildUpdateWithoutQuestionsInputObjectSchema } from './GuildUpdateWithoutQuestionsInput.schema'
import { GuildUncheckedUpdateWithoutQuestionsInputObjectSchema } from './GuildUncheckedUpdateWithoutQuestionsInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GuildUpdateOneRequiredWithoutQuestionsNestedInput> = z
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
    upsert: z.lazy(() => GuildUpsertWithoutQuestionsInputObjectSchema).optional(),
    connect: z.lazy(() => GuildWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => GuildUpdateWithoutQuestionsInputObjectSchema),
        z.lazy(() => GuildUncheckedUpdateWithoutQuestionsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const GuildUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema = Schema
