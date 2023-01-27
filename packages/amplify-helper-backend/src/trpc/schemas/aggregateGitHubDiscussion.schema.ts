import { z } from 'zod'
import { GitHubDiscussionOrderByWithRelationInputObjectSchema } from './objects/GitHubDiscussionOrderByWithRelationInput.schema'
import { GitHubDiscussionWhereInputObjectSchema } from './objects/GitHubDiscussionWhereInput.schema'
import { GitHubDiscussionWhereUniqueInputObjectSchema } from './objects/GitHubDiscussionWhereUniqueInput.schema'
import { GitHubDiscussionCountAggregateInputObjectSchema } from './objects/GitHubDiscussionCountAggregateInput.schema'
import { GitHubDiscussionMinAggregateInputObjectSchema } from './objects/GitHubDiscussionMinAggregateInput.schema'
import { GitHubDiscussionMaxAggregateInputObjectSchema } from './objects/GitHubDiscussionMaxAggregateInput.schema'

export const GitHubDiscussionAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), GitHubDiscussionCountAggregateInputObjectSchema])
    .optional(),
  _min: GitHubDiscussionMinAggregateInputObjectSchema.optional(),
  _max: GitHubDiscussionMaxAggregateInputObjectSchema.optional(),
})
