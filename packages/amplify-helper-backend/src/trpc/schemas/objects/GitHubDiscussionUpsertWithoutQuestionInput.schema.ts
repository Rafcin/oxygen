import { z } from 'zod'
import { GitHubDiscussionUpdateWithoutQuestionInputObjectSchema } from './GitHubDiscussionUpdateWithoutQuestionInput.schema'
import { GitHubDiscussionUncheckedUpdateWithoutQuestionInputObjectSchema } from './GitHubDiscussionUncheckedUpdateWithoutQuestionInput.schema'
import { GitHubDiscussionCreateWithoutQuestionInputObjectSchema } from './GitHubDiscussionCreateWithoutQuestionInput.schema'
import { GitHubDiscussionUncheckedCreateWithoutQuestionInputObjectSchema } from './GitHubDiscussionUncheckedCreateWithoutQuestionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionUpsertWithoutQuestionInput> = z
  .object({
    update: z.union([
      z.lazy(() => GitHubDiscussionUpdateWithoutQuestionInputObjectSchema),
      z.lazy(() => GitHubDiscussionUncheckedUpdateWithoutQuestionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => GitHubDiscussionCreateWithoutQuestionInputObjectSchema),
      z.lazy(() => GitHubDiscussionUncheckedCreateWithoutQuestionInputObjectSchema),
    ]),
  })
  .strict()

export const GitHubDiscussionUpsertWithoutQuestionInputObjectSchema = Schema
