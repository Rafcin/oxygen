import { z } from 'zod'
import { GitHubDiscussionSelectObjectSchema } from './objects/GitHubDiscussionSelect.schema'
import { GitHubDiscussionIncludeObjectSchema } from './objects/GitHubDiscussionInclude.schema'
import { GitHubDiscussionUpdateInputObjectSchema } from './objects/GitHubDiscussionUpdateInput.schema'
import { GitHubDiscussionUncheckedUpdateInputObjectSchema } from './objects/GitHubDiscussionUncheckedUpdateInput.schema'
import { GitHubDiscussionWhereUniqueInputObjectSchema } from './objects/GitHubDiscussionWhereUniqueInput.schema'

export const GitHubDiscussionUpdateOneSchema = z.object({
  select: GitHubDiscussionSelectObjectSchema.optional(),
  include: GitHubDiscussionIncludeObjectSchema.optional(),
  data: z.union([
    GitHubDiscussionUpdateInputObjectSchema,
    GitHubDiscussionUncheckedUpdateInputObjectSchema,
  ]),
  where: GitHubDiscussionWhereUniqueInputObjectSchema,
})
