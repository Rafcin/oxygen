import { z } from 'zod'
import { QuestionCreateWithoutGithubDiscussionInputObjectSchema } from './QuestionCreateWithoutGithubDiscussionInput.schema'
import { QuestionUncheckedCreateWithoutGithubDiscussionInputObjectSchema } from './QuestionUncheckedCreateWithoutGithubDiscussionInput.schema'
import { QuestionCreateOrConnectWithoutGithubDiscussionInputObjectSchema } from './QuestionCreateOrConnectWithoutGithubDiscussionInput.schema'
import { QuestionUpsertWithoutGithubDiscussionInputObjectSchema } from './QuestionUpsertWithoutGithubDiscussionInput.schema'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionUpdateWithoutGithubDiscussionInputObjectSchema } from './QuestionUpdateWithoutGithubDiscussionInput.schema'
import { QuestionUncheckedUpdateWithoutGithubDiscussionInputObjectSchema } from './QuestionUncheckedUpdateWithoutGithubDiscussionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUncheckedUpdateOneWithoutGithubDiscussionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutGithubDiscussionInputObjectSchema),
          z.lazy(
            () => QuestionUncheckedCreateWithoutGithubDiscussionInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => QuestionCreateOrConnectWithoutGithubDiscussionInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => QuestionUpsertWithoutGithubDiscussionInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => QuestionUpdateWithoutGithubDiscussionInputObjectSchema),
          z.lazy(
            () => QuestionUncheckedUpdateWithoutGithubDiscussionInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const QuestionUncheckedUpdateOneWithoutGithubDiscussionNestedInputObjectSchema =
  Schema
