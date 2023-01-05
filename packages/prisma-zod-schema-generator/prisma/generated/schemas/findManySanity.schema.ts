import { z } from 'zod';
import { SanitySelectObjectSchema } from './objects/SanitySelect.schema';
import { SanityOrderByWithRelationInputObjectSchema } from './objects/SanityOrderByWithRelationInput.schema';
import { SanityWhereInputObjectSchema } from './objects/SanityWhereInput.schema';
import { SanityWhereUniqueInputObjectSchema } from './objects/SanityWhereUniqueInput.schema';
import { SanityScalarFieldEnumSchema } from './enums/SanityScalarFieldEnum.schema';

export const SanityFindManySchema = z.object({
  select: z.lazy(() => SanitySelectObjectSchema.optional()),
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
