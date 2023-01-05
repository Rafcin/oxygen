import { z } from 'zod';
import { ReactionSelectObjectSchema } from './objects/ReactionSelect.schema';
import { ReactionIncludeObjectSchema } from './objects/ReactionInclude.schema';
import { ReactionCreateInputObjectSchema } from './objects/ReactionCreateInput.schema';
import { ReactionUncheckedCreateInputObjectSchema } from './objects/ReactionUncheckedCreateInput.schema';

export const ReactionCreateOneSchema = z.object({
  select: ReactionSelectObjectSchema.optional(),
  include: ReactionIncludeObjectSchema.optional(),
  data: z.union([
    ReactionCreateInputObjectSchema,
    ReactionUncheckedCreateInputObjectSchema,
  ]),
});
