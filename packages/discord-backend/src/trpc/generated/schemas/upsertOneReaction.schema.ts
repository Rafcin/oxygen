import { z } from 'zod';
import { ReactionSelectObjectSchema } from './objects/ReactionSelect.schema';
import { ReactionIncludeObjectSchema } from './objects/ReactionInclude.schema';
import { ReactionWhereUniqueInputObjectSchema } from './objects/ReactionWhereUniqueInput.schema';
import { ReactionCreateInputObjectSchema } from './objects/ReactionCreateInput.schema';
import { ReactionUncheckedCreateInputObjectSchema } from './objects/ReactionUncheckedCreateInput.schema';
import { ReactionUpdateInputObjectSchema } from './objects/ReactionUpdateInput.schema';
import { ReactionUncheckedUpdateInputObjectSchema } from './objects/ReactionUncheckedUpdateInput.schema';

export const ReactionUpsertSchema = z.object({
  select: ReactionSelectObjectSchema.optional(),
  include: ReactionIncludeObjectSchema.optional(),
  where: ReactionWhereUniqueInputObjectSchema,
  create: z.union([
    ReactionCreateInputObjectSchema,
    ReactionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ReactionUpdateInputObjectSchema,
    ReactionUncheckedUpdateInputObjectSchema,
  ]),
});
