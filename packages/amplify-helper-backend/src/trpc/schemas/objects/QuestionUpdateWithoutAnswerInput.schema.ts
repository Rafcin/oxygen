import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { GuildUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema } from './GuildUpdateOneRequiredWithoutQuestionsNestedInput.schema'
import { GitHubDiscussionUpdateOneWithoutQuestionNestedInputObjectSchema } from './GitHubDiscussionUpdateOneWithoutQuestionNestedInput.schema'
import { ParticipationUpdateManyWithoutQuestionNestedInputObjectSchema } from './ParticipationUpdateManyWithoutQuestionNestedInput.schema'
import { QuestionTagUpdateOneWithoutQuestionsNestedInputObjectSchema } from './QuestionTagUpdateOneWithoutQuestionsNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.QuestionUpdateWithoutAnswerInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    threadId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    ownerId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    channelName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    threadMetaUpdatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isSolved: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    guild: z
      .lazy(() => GuildUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema)
      .optional(),
    githubDiscussion: z
      .lazy(() => GitHubDiscussionUpdateOneWithoutQuestionNestedInputObjectSchema)
      .optional(),
    participation: z
      .lazy(() => ParticipationUpdateManyWithoutQuestionNestedInputObjectSchema)
      .optional(),
    tags: z
      .lazy(() => QuestionTagUpdateOneWithoutQuestionsNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const QuestionUpdateWithoutAnswerInputObjectSchema = Schema
