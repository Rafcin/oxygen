import { z } from 'zod';
import { ChannelSelectObjectSchema } from './objects/ChannelSelect.schema';
import { ChannelIncludeObjectSchema } from './objects/ChannelInclude.schema';
import { ChannelWhereUniqueInputObjectSchema } from './objects/ChannelWhereUniqueInput.schema';

export const ChannelDeleteOneSchema = z.object({
  select: ChannelSelectObjectSchema.optional(),
  include: ChannelIncludeObjectSchema.optional(),
  where: ChannelWhereUniqueInputObjectSchema,
});
