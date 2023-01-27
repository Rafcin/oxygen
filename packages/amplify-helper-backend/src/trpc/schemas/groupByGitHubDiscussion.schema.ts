import { z } from 'zod'
import { GitHubDiscussionWhereInputObjectSchema } from './objects/GitHubDiscussionWhereInput.schema'
import { GitHubDiscussionOrderByWithAggregationInputObjectSchema } from './objects/GitHubDiscussionOrderByWithAggregationInput.schema'
import { GitHubDiscussionScalarWhereWithAggregatesInputObjectSchema } from './objects/GitHubDiscussionScalarWhereWithAggregatesInput.schema'
import { GitHubDiscussionScalarFieldEnumSchema } from './enums/GitHubDiscussionScalarFieldEnum.schema'

export const GitHubDiscussionGroupBySchema = z.object({
  where: GitHubDiscussionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      GitHubDiscussionOrderByWithAggregationInputObjectSchema,
      GitHubDiscussionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: GitHubDiscussionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(GitHubDiscussionScalarFieldEnumSchema),
})
