import { z } from 'zod'
import { GitHubDiscussionUpdateManyMutationInputObjectSchema } from './objects/GitHubDiscussionUpdateManyMutationInput.schema'
import { GitHubDiscussionWhereInputObjectSchema } from './objects/GitHubDiscussionWhereInput.schema'

export const GitHubDiscussionUpdateManySchema = z.object({
  data: GitHubDiscussionUpdateManyMutationInputObjectSchema,
  where: GitHubDiscussionWhereInputObjectSchema.optional(),
})
