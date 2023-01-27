import { z } from 'zod'
import { QuestionCreateWithoutTagsInputObjectSchema } from './QuestionCreateWithoutTagsInput.schema'
import { QuestionUncheckedCreateWithoutTagsInputObjectSchema } from './QuestionUncheckedCreateWithoutTagsInput.schema'
import { QuestionCreateOrConnectWithoutTagsInputObjectSchema } from './QuestionCreateOrConnectWithoutTagsInput.schema'
import { QuestionCreateManyTagsInputEnvelopeObjectSchema } from './QuestionCreateManyTagsInputEnvelope.schema'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUncheckedCreateNestedManyWithoutTagsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => QuestionCreateWithoutTagsInputObjectSchema),
        z.lazy(() => QuestionCreateWithoutTagsInputObjectSchema).array(),
        z.lazy(() => QuestionUncheckedCreateWithoutTagsInputObjectSchema),
        z.lazy(() => QuestionUncheckedCreateWithoutTagsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => QuestionCreateOrConnectWithoutTagsInputObjectSchema),
        z.lazy(() => QuestionCreateOrConnectWithoutTagsInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => QuestionCreateManyTagsInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => QuestionWhereUniqueInputObjectSchema),
        z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const QuestionUncheckedCreateNestedManyWithoutTagsInputObjectSchema = Schema
