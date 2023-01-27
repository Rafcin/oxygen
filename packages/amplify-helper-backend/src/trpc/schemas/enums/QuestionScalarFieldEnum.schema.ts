import { z } from 'zod'

export const QuestionScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'threadId',
  'ownerId',
  'channelName',
  'threadMetaUpdatedAt',
  'title',
  'isSolved',
  'url',
  'guildId',
  'githubDiscussionId',
  'tagId',
])
