import { z } from 'zod';
import { SanityOrderByWithRelationInputObjectSchema } from './objects/SanityOrderByWithRelationInput.schema';
import { SanityWhereInputObjectSchema } from './objects/SanityWhereInput.schema';
import { SanityWhereUniqueInputObjectSchema } from './objects/SanityWhereUniqueInput.schema';
import { SanityCountAggregateInputObjectSchema } from './objects/SanityCountAggregateInput.schema';
import { SanityMinAggregateInputObjectSchema } from './objects/SanityMinAggregateInput.schema';
import { SanityMaxAggregateInputObjectSchema } from './objects/SanityMaxAggregateInput.schema';

export const SanityAggregateSchema = z.object({
  orderBy: z
    .union([
      SanityOrderByWithRelationInputObjectSchema,
      SanityOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SanityWhereInputObjectSchema.optional(),
  cursor: SanityWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SanityCountAggregateInputObjectSchema])
    .optional(),
  _min: SanityMinAggregateInputObjectSchema.optional(),
  _max: SanityMaxAggregateInputObjectSchema.optional(),
});
