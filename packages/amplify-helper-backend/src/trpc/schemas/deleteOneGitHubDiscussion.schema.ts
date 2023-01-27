import { z } from 'zod'
import { GitHubDiscussionSelectObjectSchema } from './objects/GitHubDiscussionSelect.schema'
import { GitHubDiscussionIncludeObjectSchema } from './objects/GitHubDiscussionInclude.schema'
import { GitHubDiscussionWhereUniqueInputObjectSchema } from './objects/GitHubDiscussionWhereUniqueInput.schema'

export const GitHubDiscussionDeleteOneSchema = z.object({
  select: GitHubDiscussionSelectObjectSchema.optional(),
  include: GitHubDiscussionIncludeObjectSchema.optional(),
  where: GitHubDiscussionWhereUniqueInputObjectSchema,
})
