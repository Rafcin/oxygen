import { z } from 'zod';
import { SanityOrderByWithRelationInputObjectSchema } from './objects/SanityOrderByWithRelationInput.schema';
import { SanityWhereInputObjectSchema } from './objects/SanityWhereInput.schema';
import { SanityWhereUniqueInputObjectSchema } from './objects/SanityWhereUniqueInput.schema';
import { SanityScalarFieldEnumSchema } from './enums/SanityScalarFieldEnum.schema';

export const SanityFindFirstSchema = z.object({
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
  distinct: z.array(SanityScalarFieldEnumSchema).optional(),
});
