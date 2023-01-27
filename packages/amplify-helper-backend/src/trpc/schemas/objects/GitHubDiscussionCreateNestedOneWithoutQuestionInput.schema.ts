import { z } from 'zod'
import { GitHubDiscussionCreateWithoutQuestionInputObjectSchema } from './GitHubDiscussionCreateWithoutQuestionInput.schema'
import { GitHubDiscussionUncheckedCreateWithoutQuestionInputObjectSchema } from './GitHubDiscussionUncheckedCreateWithoutQuestionInput.schema'
import { GitHubDiscussionCreateOrConnectWithoutQuestionInputObjectSchema } from './GitHubDiscussionCreateOrConnectWithoutQuestionInput.schema'
import { GitHubDiscussionWhereUniqueInputObjectSchema } from './GitHubDiscussionWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionCreateNestedOneWithoutQuestionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GitHubDiscussionCreateWithoutQuestionInputObjectSchema),
          z.lazy(
            () => GitHubDiscussionUncheckedCreateWithoutQuestionInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => GitHubDiscussionCreateOrConnectWithoutQuestionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => GitHubDiscussionWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const GitHubDiscussionCreateNestedOneWithoutQuestionInputObjectSchema = Schema
