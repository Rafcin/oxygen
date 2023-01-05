import { z } from 'zod';
import { ChannelSelectObjectSchema } from './objects/ChannelSelect.schema';
import { ChannelIncludeObjectSchema } from './objects/ChannelInclude.schema';
import { ChannelCreateInputObjectSchema } from './objects/ChannelCreateInput.schema';
import { ChannelUncheckedCreateInputObjectSchema } from './objects/ChannelUncheckedCreateInput.schema';

export const ChannelCreateOneSchema = z.object({
  select: ChannelSelectObjectSchema.optional(),
  include: ChannelIncludeObjectSchema.optional(),
  data: z.union([
    ChannelCreateInputObjectSchema,
    ChannelUncheckedCreateInputObjectSchema,
  ]),
});
