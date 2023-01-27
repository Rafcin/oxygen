import { z } from 'zod'
import { GitHubDiscussionSelectObjectSchema } from './objects/GitHubDiscussionSelect.schema'
import { GitHubDiscussionIncludeObjectSchema } from './objects/GitHubDiscussionInclude.schema'
import { GitHubDiscussionOrderByWithRelationInputObjectSchema } from './objects/GitHubDiscussionOrderByWithRelationInput.schema'
import { GitHubDiscussionWhereInputObjectSchema } from './objects/GitHubDiscussionWhereInput.schema'
import { GitHubDiscussionWhereUniqueInputObjectSchema } from './objects/GitHubDiscussionWhereUniqueInput.schema'
import { GitHubDiscussionScalarFieldEnumSchema } from './enums/GitHubDiscussionScalarFieldEnum.schema'

export const GitHubDiscussionFindFirstSchema = z.object({
  select: GitHubDiscussionSelectObjectSchema.optional(),
  include: GitHubDiscussionIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      GitHubDiscussionOrderByWithRelationInputObjectSchema,
      GitHubDiscussionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GitHubDiscussionWhereInputObjectSchema.optional(),
  cursor: GitHubDiscussionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(GitHubDiscussionScalarFieldEnumSchema).optional(),
})
