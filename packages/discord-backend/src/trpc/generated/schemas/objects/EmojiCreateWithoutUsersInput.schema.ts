import { z } from 'zod';
import { RoleCreateNestedManyWithoutEmojiInputObjectSchema } from './RoleCreateNestedManyWithoutEmojiInput.schema';
import { EmojiCreateuserIdsInputObjectSchema } from './EmojiCreateuserIdsInput.schema';
import { GuildCreateNestedOneWithoutEmojisInputObjectSchema } from './GuildCreateNestedOneWithoutEmojisInput.schema';
import { ReactionCreateNestedManyWithoutEmojisInputObjectSchema } from './ReactionCreateNestedManyWithoutEmojisInput.schema';
import { EmojiCreatereactionIdsInputObjectSchema } from './EmojiCreatereactionIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiCreateWithoutUsersInput> = z
  .object({
    id: z.string(),
    name: z.string(),
    roles: z
      .lazy(() => RoleCreateNestedManyWithoutEmojiInputObjectSchema)
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
    Guild: z.lazy(() => GuildCreateNestedOneWithoutEmojisInputObjectSchema),
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

export const EmojiCreateWithoutUsersInputObjectSchema = Schema;
