import { z } from 'zod';
import { ReactionSelectObjectSchema } from './objects/ReactionSelect.schema';
import { ReactionIncludeObjectSchema } from './objects/ReactionInclude.schema';
import { ReactionOrderByWithRelationInputObjectSchema } from './objects/ReactionOrderByWithRelationInput.schema';
import { ReactionWhereInputObjectSchema } from './objects/ReactionWhereInput.schema';
import { ReactionWhereUniqueInputObjectSchema } from './objects/ReactionWhereUniqueInput.schema';
import { ReactionScalarFieldEnumSchema } from './enums/ReactionScalarFieldEnum.schema';

export const ReactionFindManySchema = z.object({
  select: z.lazy(() => ReactionSelectObjectSchema.optional()),
  include: z.lazy(() => ReactionIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ReactionOrderByWithRelationInputObjectSchema,
      ReactionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ReactionWhereInputObjectSchema.optional(),
  cursor: ReactionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ReactionScalarFieldEnumSchema).optional(),
});
