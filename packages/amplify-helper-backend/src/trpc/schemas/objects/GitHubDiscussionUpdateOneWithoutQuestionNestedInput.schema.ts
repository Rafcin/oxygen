import { z } from 'zod'
import { GitHubDiscussionCreateWithoutQuestionInputObjectSchema } from './GitHubDiscussionCreateWithoutQuestionInput.schema'
import { GitHubDiscussionUncheckedCreateWithoutQuestionInputObjectSchema } from './GitHubDiscussionUncheckedCreateWithoutQuestionInput.schema'
import { GitHubDiscussionCreateOrConnectWithoutQuestionInputObjectSchema } from './GitHubDiscussionCreateOrConnectWithoutQuestionInput.schema'
import { GitHubDiscussionUpsertWithoutQuestionInputObjectSchema } from './GitHubDiscussionUpsertWithoutQuestionInput.schema'
import { GitHubDiscussionWhereUniqueInputObjectSchema } from './GitHubDiscussionWhereUniqueInput.schema'
import { GitHubDiscussionUpdateWithoutQuestionInputObjectSchema } from './GitHubDiscussionUpdateWithoutQuestionInput.schema'
import { GitHubDiscussionUncheckedUpdateWithoutQuestionInputObjectSchema } from './GitHubDiscussionUncheckedUpdateWithoutQuestionInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionUpdateOneWithoutQuestionNestedInput> =
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
      upsert: z
        .lazy(() => GitHubDiscussionUpsertWithoutQuestionInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => GitHubDiscussionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => GitHubDiscussionUpdateWithoutQuestionInputObjectSchema),
          z.lazy(
            () => GitHubDiscussionUncheckedUpdateWithoutQuestionInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const GitHubDiscussionUpdateOneWithoutQuestionNestedInputObjectSchema = Schema
