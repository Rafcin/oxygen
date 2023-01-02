import { z } from 'zod';
import { ReactionSelectObjectSchema } from './objects/ReactionSelect.schema';
import { ReactionIncludeObjectSchema } from './objects/ReactionInclude.schema';
import { ReactionUpdateInputObjectSchema } from './objects/ReactionUpdateInput.schema';
import { ReactionUncheckedUpdateInputObjectSchema } from './objects/ReactionUncheckedUpdateInput.schema';
import { ReactionWhereUniqueInputObjectSchema } from './objects/ReactionWhereUniqueInput.schema';

export const ReactionUpdateOneSchema = z.object({
  select: ReactionSelectObjectSchema.optional(),
  include: ReactionIncludeObjectSchema.optional(),
  data: z.union([
    ReactionUpdateInputObjectSchema,
    ReactionUncheckedUpdateInputObjectSchema,
  ]),
  where: ReactionWhereUniqueInputObjectSchema,
});
