import { z } from 'zod'
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'
import { QuestionCreateWithoutGithubDiscussionInputObjectSchema } from './QuestionCreateWithoutGithubDiscussionInput.schema'
import { QuestionUncheckedCreateWithoutGithubDiscussionInputObjectSchema } from './QuestionUncheckedCreateWithoutGithubDiscussionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutGithubDiscussionInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => QuestionCreateWithoutGithubDiscussionInputObjectSchema),
        z.lazy(
          () => QuestionUncheckedCreateWithoutGithubDiscussionInputObjectSchema
        ),
      ]),
    })
    .strict()

export const QuestionCreateOrConnectWithoutGithubDiscussionInputObjectSchema = Schema
