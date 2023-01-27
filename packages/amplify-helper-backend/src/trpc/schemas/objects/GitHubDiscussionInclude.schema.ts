import { z } from 'zod'
import { QuestionArgsObjectSchema } from './QuestionArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionInclude> = z
  .object({
    Question: z
      .union([z.boolean(), z.lazy(() => QuestionArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const GitHubDiscussionIncludeObjectSchema = Schema
