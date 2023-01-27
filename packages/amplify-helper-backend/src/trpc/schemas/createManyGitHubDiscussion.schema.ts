import { z } from 'zod'
import { GitHubDiscussionCreateManyInputObjectSchema } from './objects/GitHubDiscussionCreateManyInput.schema'

export const GitHubDiscussionCreateManySchema = z.object({
  data: z.union([
    GitHubDiscussionCreateManyInputObjectSchema,
    z.array(GitHubDiscussionCreateManyInputObjectSchema),
  ]),
})
