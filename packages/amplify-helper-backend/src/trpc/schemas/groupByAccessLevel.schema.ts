import { z } from 'zod'
import { AccessLevelWhereInputObjectSchema } from './objects/AccessLevelWhereInput.schema'
import { AccessLevelOrderByWithAggregationInputObjectSchema } from './objects/AccessLevelOrderByWithAggregationInput.schema'
import { AccessLevelScalarWhereWithAggregatesInputObjectSchema } from './objects/AccessLevelScalarWhereWithAggregatesInput.schema'
import { AccessLevelScalarFieldEnumSchema } from './enums/AccessLevelScalarFieldEnum.schema'

export const AccessLevelGroupBySchema = z.object({
  where: AccessLevelWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AccessLevelOrderByWithAggregationInputObjectSchema,
      AccessLevelOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: AccessLevelScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AccessLevelScalarFieldEnumSchema),
})
