import { z } from 'zod';
import { RoleCreateNestedManyWithoutEmojiInputObjectSchema } from './RoleCreateNestedManyWithoutEmojiInput.schema';
import { UserCreateNestedManyWithoutEmojisInputObjectSchema } from './UserCreateNestedManyWithoutEmojisInput.schema';
import { EmojiCreateuserIdsInputObjectSchema } from './EmojiCreateuserIdsInput.schema';
import { ReactionCreateNestedManyWithoutEmojisInputObjectSchema } from './ReactionCreateNestedManyWithoutEmojisInput.schema';
import { EmojiCreatereactionIdsInputObjectSchema } from './EmojiCreatereactionIdsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiCreateWithoutGuildInput> = z
  .object({
    id: z.string(),
    name: z.string(),
    roles: z
      .lazy(() => RoleCreateNestedManyWithoutEmojiInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserCreateNestedManyWithoutEmojisInputObjectSchema)
      .optional(),
    userIds: z
      .union([
        z.lazy(() => EmojiCreateuserIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    require_colons: z.boolean().optional().nullable(),
    managed: z.boolean().optional().nullable(),
    animated: z.boolean().optional().nullable(),
    available: z.boolean().optional().nullable(),
    reactions: z
      .lazy(() => ReactionCreateNestedManyWithoutEmojisInputObjectSchema)
      .optional(),
    reactionIds: z
      .union([
        z.lazy(() => EmojiCreatereactionIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const EmojiCreateWithoutGuildInputObjectSchema = Schema;
