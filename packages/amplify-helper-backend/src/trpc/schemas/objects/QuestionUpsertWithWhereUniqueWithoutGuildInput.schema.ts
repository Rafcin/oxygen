import { z } from 'zod'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionUpdateWithoutGuildInputObjectSchema } from './QuestionUpdateWithoutGuildInput.schema'
import { QuestionUncheckedUpdateWithoutGuildInputObjectSchema } from './QuestionUncheckedUpdateWithoutGuildInput.schema'
import { QuestionCreateWithoutGuildInputObjectSchema } from './QuestionCreateWithoutGuildInput.schema'
import { QuestionUncheckedCreateWithoutGuildInputObjectSchema } from './QuestionUncheckedCreateWithoutGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutGuildInput> = z
  .object({
    where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => QuestionUpdateWithoutGuildInputObjectSchema),
      z.lazy(() => QuestionUncheckedUpdateWithoutGuildInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutGuildInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutGuildInputObjectSchema),
    ]),
  })
  .strict()

export const QuestionUpsertWithWhereUniqueWithoutGuildInputObjectSchema = Schema
