import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.GitHubDiscussionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    url: z.literal(true).optional(),
  })
  .strict()

export const GitHubDiscussionMaxAggregateInputObjectSchema = Schema
