import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { QuestionUpdateOneWithoutGithubDiscussionNestedInputObjectSchema } from './QuestionUpdateOneWithoutGithubDiscussionNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    url: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Question: z
      .lazy(() => QuestionUpdateOneWithoutGithubDiscussionNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const GitHubDiscussionUpdateInputObjectSchema = Schema
