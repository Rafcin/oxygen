import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { RoleListRelationFilterObjectSchema } from './RoleListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { GuildRelationFilterObjectSchema } from './GuildRelationFilter.schema';
import { GuildWhereInputObjectSchema } from './GuildWhereInput.schema';
import { ReactionListRelationFilterObjectSchema } from './ReactionListRelationFilter.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EmojiWhereInputObjectSchema),
        z.lazy(() => EmojiWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EmojiWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EmojiWhereInputObjectSchema),
        z.lazy(() => EmojiWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    roles: z.lazy(() => RoleListRelationFilterObjectSchema).optional(),
    users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    userIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    require_colons: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    managed: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    animated: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    available: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    Guild: z
      .union([
        z.lazy(() => GuildRelationFilterObjectSchema),
        z.lazy(() => GuildWhereInputObjectSchema),
      ])
      .optional(),
    guildId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    reactions: z.lazy(() => ReactionListRelationFilterObjectSchema).optional(),
    reactionIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const EmojiWhereInputObjectSchema = Schema;
