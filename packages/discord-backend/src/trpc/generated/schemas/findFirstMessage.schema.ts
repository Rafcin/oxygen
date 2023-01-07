import { z } from 'zod';
import { MessageOrderByWithRelationInputObjectSchema } from './objects/MessageOrderByWithRelationInput.schema';
import { MessageWhereInputObjectSchema } from './objects/MessageWhereInput.schema';
import { MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';
import { MessageScalarFieldEnumSchema } from './enums/MessageScalarFieldEnum.schema';

export const MessageFindFirstSchema = z.object({
  orderBy: z
    .union([
      MessageOrderByWithRelationInputObjectSchema,
      MessageOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MessageWhereInputObjectSchema.optional(),
  cursor: MessageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MessageScalarFieldEnumSchema).optional(),
});
