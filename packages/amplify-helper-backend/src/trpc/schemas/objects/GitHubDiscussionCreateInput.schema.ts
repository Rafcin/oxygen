import { z } from 'zod'
import { QuestionCreateNestedOneWithoutGithubDiscussionInputObjectSchema } from './QuestionCreateNestedOneWithoutGithubDiscussionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionCreateInput> = z
  .object({
    id: z.string(),
    url: z.string(),
    Question: z
      .lazy(() => QuestionCreateNestedOneWithoutGithubDiscussionInputObjectSchema)
      .optional(),
  })
  .strict()

export const GitHubDiscussionCreateInputObjectSchema = Schema
