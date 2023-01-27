import { z } from 'zod'

export const AnswerScalarFieldEnumSchema = z.enum([
  'id',
  'selectedAt',
  'selectedBy',
  'createdAt',
  'updatedAt',
  'ownerId',
  'content',
  'url',
  'questionId',
  'participationId',
])
