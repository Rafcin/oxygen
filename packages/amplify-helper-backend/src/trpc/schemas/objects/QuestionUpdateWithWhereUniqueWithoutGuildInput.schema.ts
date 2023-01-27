import { z } from 'zod'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionUpdateWithoutGuildInputObjectSchema } from './QuestionUpdateWithoutGuildInput.schema'
import { QuestionUncheckedUpdateWithoutGuildInputObjectSchema } from './QuestionUncheckedUpdateWithoutGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutGuildInput> = z
  .object({
    where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => QuestionUpdateWithoutGuildInputObjectSchema),
      z.lazy(() => QuestionUncheckedUpdateWithoutGuildInputObjectSchema),
    ]),
  })
  .strict()

export const QuestionUpdateWithWhereUniqueWithoutGuildInputObjectSchema = Schema
