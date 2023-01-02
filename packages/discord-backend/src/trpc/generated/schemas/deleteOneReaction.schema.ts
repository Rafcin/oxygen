import { z } from 'zod';
import { ReactionSelectObjectSchema } from './objects/ReactionSelect.schema';
import { ReactionIncludeObjectSchema } from './objects/ReactionInclude.schema';
import { ReactionWhereUniqueInputObjectSchema } from './objects/ReactionWhereUniqueInput.schema';

export const ReactionDeleteOneSchema = z.object({
  select: ReactionSelectObjectSchema.optional(),
  include: ReactionIncludeObjectSchema.optional(),
  where: ReactionWhereUniqueInputObjectSchema,
});
