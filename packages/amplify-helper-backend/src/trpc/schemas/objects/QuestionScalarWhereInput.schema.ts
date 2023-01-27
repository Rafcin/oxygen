import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionScalarWhereInputObjectSchema),
        z.lazy(() => QuestionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionScalarWhereInputObjectSchema),
        z.lazy(() => QuestionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    threadId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    ownerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    channelName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    threadMetaUpdatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    isSolved: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    guildId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    githubDiscussionId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tagId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const QuestionScalarWhereInputObjectSchema = Schema
