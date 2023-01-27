import { z } from 'zod'
import { QuestionUncheckedCreateNestedOneWithoutGithubDiscussionInputObjectSchema } from './QuestionUncheckedCreateNestedOneWithoutGithubDiscussionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionUncheckedCreateInput> = z
  .object({
    id: z.string(),
    url: z.string(),
    Question: z
      .lazy(
        () =>
          QuestionUncheckedCreateNestedOneWithoutGithubDiscussionInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const GitHubDiscussionUncheckedCreateInputObjectSchema = Schema
