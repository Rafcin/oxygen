import { z } from 'zod'
import { ConfigurationOrderByWithRelationInputObjectSchema } from './objects/ConfigurationOrderByWithRelationInput.schema'
import { ConfigurationWhereInputObjectSchema } from './objects/ConfigurationWhereInput.schema'
import { ConfigurationWhereUniqueInputObjectSchema } from './objects/ConfigurationWhereUniqueInput.schema'
import { ConfigurationCountAggregateInputObjectSchema } from './objects/ConfigurationCountAggregateInput.schema'
import { ConfigurationMinAggregateInputObjectSchema } from './objects/ConfigurationMinAggregateInput.schema'
import { ConfigurationMaxAggregateInputObjectSchema } from './objects/ConfigurationMaxAggregateInput.schema'

export const ConfigurationAggregateSchema = z.object({
  orderBy: z
    .union([
      ConfigurationOrderByWithRelationInputObjectSchema,
      ConfigurationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ConfigurationWhereInputObjectSchema.optional(),
  cursor: ConfigurationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ConfigurationCountAggregateInputObjectSchema])
    .optional(),
  _min: ConfigurationMinAggregateInputObjectSchema.optional(),
  _max: ConfigurationMaxAggregateInputObjectSchema.optional(),
})
