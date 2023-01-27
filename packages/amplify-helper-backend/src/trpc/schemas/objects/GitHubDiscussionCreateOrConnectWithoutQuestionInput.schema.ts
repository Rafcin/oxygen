import { z } from 'zod'
import { GitHubDiscussionWhereUniqueInputObjectSchema } from './GitHubDiscussionWhereUniqueInput.schema'
import { GitHubDiscussionCreateWithoutQuestionInputObjectSchema } from './GitHubDiscussionCreateWithoutQuestionInput.schema'
import { GitHubDiscussionUncheckedCreateWithoutQuestionInputObjectSchema } from './GitHubDiscussionUncheckedCreateWithoutQuestionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionCreateOrConnectWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => GitHubDiscussionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => GitHubDiscussionCreateWithoutQuestionInputObjectSchema),
        z.lazy(
          () => GitHubDiscussionUncheckedCreateWithoutQuestionInputObjectSchema
        ),
      ]),
    })
    .strict()

export const GitHubDiscussionCreateOrConnectWithoutQuestionInputObjectSchema = Schema
