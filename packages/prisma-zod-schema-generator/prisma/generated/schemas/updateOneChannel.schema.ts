import { z } from 'zod';
import { ChannelSelectObjectSchema } from './objects/ChannelSelect.schema';
import { ChannelIncludeObjectSchema } from './objects/ChannelInclude.schema';
import { ChannelUpdateInputObjectSchema } from './objects/ChannelUpdateInput.schema';
import { ChannelUncheckedUpdateInputObjectSchema } from './objects/ChannelUncheckedUpdateInput.schema';
import { ChannelWhereUniqueInputObjectSchema } from './objects/ChannelWhereUniqueInput.schema';

export const ChannelUpdateOneSchema = z.object({
  select: ChannelSelectObjectSchema.optional(),
  include: ChannelIncludeObjectSchema.optional(),
  data: z.union([
    ChannelUpdateInputObjectSchema,
    ChannelUncheckedUpdateInputObjectSchema,
  ]),
  where: ChannelWhereUniqueInputObjectSchema,
});
