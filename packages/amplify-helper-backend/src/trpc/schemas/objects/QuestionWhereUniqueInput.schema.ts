import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    threadId: z.string().optional(),
    githubDiscussionId: z.string().optional(),
  })
  .strict()

export const QuestionWhereUniqueInputObjectSchema = Schema
