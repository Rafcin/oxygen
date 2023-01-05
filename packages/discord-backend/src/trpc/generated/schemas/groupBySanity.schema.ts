import { z } from 'zod';
import { SanityWhereInputObjectSchema } from './objects/SanityWhereInput.schema';
import { SanityOrderByWithAggregationInputObjectSchema } from './objects/SanityOrderByWithAggregationInput.schema';
import { SanityScalarWhereWithAggregatesInputObjectSchema } from './objects/SanityScalarWhereWithAggregatesInput.schema';
import { SanityScalarFieldEnumSchema } from './enums/SanityScalarFieldEnum.schema';

export const SanityGroupBySchema = z.object({
  where: SanityWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SanityOrderByWithAggregationInputObjectSchema,
      SanityOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SanityScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SanityScalarFieldEnumSchema),
});
