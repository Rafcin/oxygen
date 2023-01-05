import { z } from 'zod';
import { ChannelSelectObjectSchema } from './objects/ChannelSelect.schema';
import { ChannelIncludeObjectSchema } from './objects/ChannelInclude.schema';
import { ChannelWhereUniqueInputObjectSchema } from './objects/ChannelWhereUniqueInput.schema';
import { ChannelCreateInputObjectSchema } from './objects/ChannelCreateInput.schema';
import { ChannelUncheckedCreateInputObjectSchema } from './objects/ChannelUncheckedCreateInput.schema';
import { ChannelUpdateInputObjectSchema } from './objects/ChannelUpdateInput.schema';
import { ChannelUncheckedUpdateInputObjectSchema } from './objects/ChannelUncheckedUpdateInput.schema';

export const ChannelUpsertSchema = z.object({
  select: ChannelSelectObjectSchema.optional(),
  include: ChannelIncludeObjectSchema.optional(),
  where: ChannelWhereUniqueInputObjectSchema,
  create: z.union([
    ChannelCreateInputObjectSchema,
    ChannelUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ChannelUpdateInputObjectSchema,
    ChannelUncheckedUpdateInputObjectSchema,
  ]),
});
