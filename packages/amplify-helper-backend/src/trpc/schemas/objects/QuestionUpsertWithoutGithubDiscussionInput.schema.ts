import { z } from 'zod'
import { QuestionUpdateWithoutGithubDiscussionInputObjectSchema } from './QuestionUpdateWithoutGithubDiscussionInput.schema'
import { QuestionUncheckedUpdateWithoutGithubDiscussionInputObjectSchema } from './QuestionUncheckedUpdateWithoutGithubDiscussionInput.schema'
import { QuestionCreateWithoutGithubDiscussionInputObjectSchema } from './QuestionCreateWithoutGithubDiscussionInput.schema'
import { QuestionUncheckedCreateWithoutGithubDiscussionInputObjectSchema } from './QuestionUncheckedCreateWithoutGithubDiscussionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUpsertWithoutGithubDiscussionInput> = z
  .object({
    update: z.union([
      z.lazy(() => QuestionUpdateWithoutGithubDiscussionInputObjectSchema),
      z.lazy(() => QuestionUncheckedUpdateWithoutGithubDiscussionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutGithubDiscussionInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutGithubDiscussionInputObjectSchema),
    ]),
  })
  .strict()

export const QuestionUpsertWithoutGithubDiscussionInputObjectSchema = Schema
