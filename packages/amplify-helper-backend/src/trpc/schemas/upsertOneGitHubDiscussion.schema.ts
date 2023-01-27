import { z } from 'zod'
import { GitHubDiscussionSelectObjectSchema } from './objects/GitHubDiscussionSelect.schema'
import { GitHubDiscussionIncludeObjectSchema } from './objects/GitHubDiscussionInclude.schema'
import { GitHubDiscussionWhereUniqueInputObjectSchema } from './objects/GitHubDiscussionWhereUniqueInput.schema'
import { GitHubDiscussionCreateInputObjectSchema } from './objects/GitHubDiscussionCreateInput.schema'
import { GitHubDiscussionUncheckedCreateInputObjectSchema } from './objects/GitHubDiscussionUncheckedCreateInput.schema'
import { GitHubDiscussionUpdateInputObjectSchema } from './objects/GitHubDiscussionUpdateInput.schema'
import { GitHubDiscussionUncheckedUpdateInputObjectSchema } from './objects/GitHubDiscussionUncheckedUpdateInput.schema'

export const GitHubDiscussionUpsertSchema = z.object({
  select: GitHubDiscussionSelectObjectSchema.optional(),
  include: GitHubDiscussionIncludeObjectSchema.optional(),
  where: GitHubDiscussionWhereUniqueInputObjectSchema,
  create: z.union([
    GitHubDiscussionCreateInputObjectSchema,
    GitHubDiscussionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    GitHubDiscussionUpdateInputObjectSchema,
    GitHubDiscussionUncheckedUpdateInputObjectSchema,
  ]),
})
