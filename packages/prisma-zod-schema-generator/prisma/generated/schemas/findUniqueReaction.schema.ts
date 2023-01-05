import { z } from 'zod';
import { ReactionSelectObjectSchema } from './objects/ReactionSelect.schema';
import { ReactionIncludeObjectSchema } from './objects/ReactionInclude.schema';
import { ReactionWhereUniqueInputObjectSchema } from './objects/ReactionWhereUniqueInput.schema';

export const ReactionFindUniqueSchema = z.object({
  select: ReactionSelectObjectSchema.optional(),
  include: ReactionIncludeObjectSchema.optional(),
  where: ReactionWhereUniqueInputObjectSchema,
});
