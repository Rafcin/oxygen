import { z } from 'zod'
import { GitHubDiscussionWhereInputObjectSchema } from './objects/GitHubDiscussionWhereInput.schema'

export const GitHubDiscussionDeleteManySchema = z.object({
  where: GitHubDiscussionWhereInputObjectSchema.optional(),
})
