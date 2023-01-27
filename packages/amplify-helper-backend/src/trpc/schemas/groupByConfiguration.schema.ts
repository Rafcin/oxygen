import { z } from 'zod'
import { ConfigurationWhereInputObjectSchema } from './objects/ConfigurationWhereInput.schema'
import { ConfigurationOrderByWithAggregationInputObjectSchema } from './objects/ConfigurationOrderByWithAggregationInput.schema'
import { ConfigurationScalarWhereWithAggregatesInputObjectSchema } from './objects/ConfigurationScalarWhereWithAggregatesInput.schema'
import { ConfigurationScalarFieldEnumSchema } from './enums/ConfigurationScalarFieldEnum.schema'

export const ConfigurationGroupBySchema = z.object({
  where: ConfigurationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ConfigurationOrderByWithAggregationInputObjectSchema,
      ConfigurationOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ConfigurationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ConfigurationScalarFieldEnumSchema),
})
