import { z } from 'zod'
import { QuestionArgsObjectSchema } from './QuestionArgs.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionSelect> = z
  .object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    Question: z
      .union([z.boolean(), z.lazy(() => QuestionArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const GitHubDiscussionSelectObjectSchema = Schema
