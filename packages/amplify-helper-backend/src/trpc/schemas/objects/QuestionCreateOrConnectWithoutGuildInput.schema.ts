import { z } from 'zod'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionCreateWithoutGuildInputObjectSchema } from './QuestionCreateWithoutGuildInput.schema'
import { QuestionUncheckedCreateWithoutGuildInputObjectSchema } from './QuestionUncheckedCreateWithoutGuildInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutGuildInput> = z
  .object({
    where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutGuildInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutGuildInputObjectSchema),
    ]),
  })
  .strict()

export const QuestionCreateOrConnectWithoutGuildInputObjectSchema = Schema
