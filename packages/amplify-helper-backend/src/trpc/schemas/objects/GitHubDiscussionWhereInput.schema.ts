import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { QuestionRelationFilterObjectSchema } from './QuestionRelationFilter.schema'
import { QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GitHubDiscussionWhereInputObjectSchema),
        z.lazy(() => GitHubDiscussionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GitHubDiscussionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GitHubDiscussionWhereInputObjectSchema),
        z.lazy(() => GitHubDiscussionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    Question: z
      .union([
        z.lazy(() => QuestionRelationFilterObjectSchema),
        z.lazy(() => QuestionWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const GitHubDiscussionWhereInputObjectSchema = Schema
