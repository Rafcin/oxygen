import { z } from 'zod'
import { AnswerCreateWithoutQuestionInputObjectSchema } from './AnswerCreateWithoutQuestionInput.schema'
import { AnswerUncheckedCreateWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateWithoutQuestionInput.schema'
import { AnswerCreateOrConnectWithoutQuestionInputObjectSchema } from './AnswerCreateOrConnectWithoutQuestionInput.schema'
import { AnswerUpsertWithoutQuestionInputObjectSchema } from './AnswerUpsertWithoutQuestionInput.schema'
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema'
import { AnswerUpdateWithoutQuestionInputObjectSchema } from './AnswerUpdateWithoutQuestionInput.schema'
import { AnswerUncheckedUpdateWithoutQuestionInputObjectSchema } from './AnswerUncheckedUpdateWithoutQuestionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.AnswerUpdateOneWithoutQuestionNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema),
        z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AnswerCreateOrConnectWithoutQuestionInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => AnswerUpsertWithoutQuestionInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AnswerWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AnswerUpdateWithoutQuestionInputObjectSchema),
        z.lazy(() => AnswerUncheckedUpdateWithoutQuestionInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const AnswerUpdateOneWithoutQuestionNestedInputObjectSchema = Schema
