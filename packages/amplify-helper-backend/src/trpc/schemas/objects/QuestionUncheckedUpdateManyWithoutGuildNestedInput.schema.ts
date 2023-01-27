import { z } from 'zod'
import { QuestionCreateWithoutGuildInputObjectSchema } from './QuestionCreateWithoutGuildInput.schema'
import { QuestionUncheckedCreateWithoutGuildInputObjectSchema } from './QuestionUncheckedCreateWithoutGuildInput.schema'
import { QuestionCreateOrConnectWithoutGuildInputObjectSchema } from './QuestionCreateOrConnectWithoutGuildInput.schema'
import { QuestionUpsertWithWhereUniqueWithoutGuildInputObjectSchema } from './QuestionUpsertWithWhereUniqueWithoutGuildInput.schema'
import { QuestionCreateManyGuildInputEnvelopeObjectSchema } from './QuestionCreateManyGuildInputEnvelope.schema'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionUpdateWithWhereUniqueWithoutGuildInputObjectSchema } from './QuestionUpdateWithWhereUniqueWithoutGuildInput.schema'
import { QuestionUpdateManyWithWhereWithoutGuildInputObjectSchema } from './QuestionUpdateManyWithWhereWithoutGuildInput.schema'
import { QuestionScalarWhereInputObjectSchema } from './QuestionScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUncheckedUpdateManyWithoutGuildNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutGuildInputObjectSchema),
          z.lazy(() => QuestionCreateWithoutGuildInputObjectSchema).array(),
          z.lazy(() => QuestionUncheckedCreateWithoutGuildInputObjectSchema),
          z.lazy(() => QuestionUncheckedCreateWithoutGuildInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => QuestionCreateOrConnectWithoutGuildInputObjectSchema),
          z.lazy(() => QuestionCreateOrConnectWithoutGuildInputObjectSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => QuestionUpsertWithWhereUniqueWithoutGuildInputObjectSchema),
          z
            .lazy(() => QuestionUpsertWithWhereUniqueWithoutGuildInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuestionCreateManyGuildInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => QuestionUpdateWithWhereUniqueWithoutGuildInputObjectSchema),
          z
            .lazy(() => QuestionUpdateWithWhereUniqueWithoutGuildInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => QuestionUpdateManyWithWhereWithoutGuildInputObjectSchema),
          z
            .lazy(() => QuestionUpdateManyWithWhereWithoutGuildInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => QuestionScalarWhereInputObjectSchema),
          z.lazy(() => QuestionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const QuestionUncheckedUpdateManyWithoutGuildNestedInputObjectSchema = Schema
