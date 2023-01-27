import { z } from 'zod'
import { QuestionCreateWithoutParticipationInputObjectSchema } from './QuestionCreateWithoutParticipationInput.schema'
import { QuestionUncheckedCreateWithoutParticipationInputObjectSchema } from './QuestionUncheckedCreateWithoutParticipationInput.schema'
import { QuestionCreateOrConnectWithoutParticipationInputObjectSchema } from './QuestionCreateOrConnectWithoutParticipationInput.schema'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionCreateNestedOneWithoutParticipationInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => QuestionCreateWithoutParticipationInputObjectSchema),
        z.lazy(() => QuestionUncheckedCreateWithoutParticipationInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => QuestionCreateOrConnectWithoutParticipationInputObjectSchema)
      .optional(),
    connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const QuestionCreateNestedOneWithoutParticipationInputObjectSchema = Schema
