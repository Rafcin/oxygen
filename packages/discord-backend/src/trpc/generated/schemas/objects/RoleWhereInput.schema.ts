import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { GuildRelationFilterObjectSchema } from './GuildRelationFilter.schema';
import { GuildWhereInputObjectSchema } from './GuildWhereInput.schema';
import { EmojiRelationFilterObjectSchema } from './EmojiRelationFilter.schema';
import { EmojiWhereInputObjectSchema } from './EmojiWhereInput.schema';
import { MessageRelationFilterObjectSchema } from './MessageRelationFilter.schema';
import { MessageWhereInputObjectSchema } from './MessageWhereInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.RoleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleWhereInputObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleWhereInputObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    color: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    hoist: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    icon: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    unicode_emoji: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    position: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    permissions: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    managed: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    mentionable: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    guild_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Guild: z
      .union([
        z.lazy(() => GuildRelationFilterObjectSchema),
        z.lazy(() => GuildWhereInputObjectSchema),
      ])
      .optional(),
    guildId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Emoji: z
      .union([
        z.lazy(() => EmojiRelationFilterObjectSchema),
        z.lazy(() => EmojiWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    emojiId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Message: z
      .union([
        z.lazy(() => MessageRelationFilterObjectSchema),
        z.lazy(() => MessageWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    messageId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const RoleWhereInputObjectSchema = Schema;
