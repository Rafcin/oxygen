import { z } from 'zod'
import { GitHubDiscussionSelectObjectSchema } from './GitHubDiscussionSelect.schema'
import { GitHubDiscussionIncludeObjectSchema } from './GitHubDiscussionInclude.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionArgs> = z
  .object({
    select: z.lazy(() => GitHubDiscussionSelectObjectSchema).optional(),
    include: z.lazy(() => GitHubDiscussionIncludeObjectSchema).optional(),
  })
  .strict()

export const GitHubDiscussionArgsObjectSchema = Schema
