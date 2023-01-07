import { z } from 'zod';
import { RoleUncheckedCreateNestedManyWithoutEmojiInputObjectSchema } from './RoleUncheckedCreateNestedManyWithoutEmojiInput.schema';
import { UserUncheckedCreateNestedManyWithoutEmojisInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutEmojisInput.schema';
import { EmojiCreateuserIdsInputObjectSchema } from './EmojiCreateuserIdsInput.schema';
import { ReactionUncheckedCreateNestedManyWithoutEmojisInputObjectSchema } from './ReactionUncheckedCreateNestedManyWithoutEmojisInput.schema';
import { EmojiCreatereactionIdsInputObjectSchema } from './EmojiCreatereactionIdsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUncheckedCreateWithoutGuildInput> = z
  .object({
    id: z.string(),
    name: z.string(),
    roles: z
      .lazy(() => RoleUncheckedCreateNestedManyWithoutEmojiInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutEmojisInputObjectSchema)
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
      .lazy(
        () => ReactionUncheckedCreateNestedManyWithoutEmojisInputObjectSchema,
      )
      .optional(),
    reactionIds: z
      .union([
        z.lazy(() => EmojiCreatereactionIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const EmojiUncheckedCreateWithoutGuildInputObjectSchema = Schema;
