import { z } from 'zod'
import { GitHubDiscussionSelectObjectSchema } from './objects/GitHubDiscussionSelect.schema'
import { GitHubDiscussionIncludeObjectSchema } from './objects/GitHubDiscussionInclude.schema'
import { GitHubDiscussionCreateInputObjectSchema } from './objects/GitHubDiscussionCreateInput.schema'
import { GitHubDiscussionUncheckedCreateInputObjectSchema } from './objects/GitHubDiscussionUncheckedCreateInput.schema'

export const GitHubDiscussionCreateOneSchema = z.object({
  select: GitHubDiscussionSelectObjectSchema.optional(),
  include: GitHubDiscussionIncludeObjectSchema.optional(),
  data: z.union([
    GitHubDiscussionCreateInputObjectSchema,
    GitHubDiscussionUncheckedCreateInputObjectSchema,
  ]),
})
