import { z } from 'zod';
import { RoleUncheckedCreateNestedManyWithoutEmojiInputObjectSchema } from './RoleUncheckedCreateNestedManyWithoutEmojiInput.schema';
import { EmojiCreateuserIdsInputObjectSchema } from './EmojiCreateuserIdsInput.schema';
import { ReactionUncheckedCreateNestedManyWithoutEmojisInputObjectSchema } from './ReactionUncheckedCreateNestedManyWithoutEmojisInput.schema';
import { EmojiCreatereactionIdsInputObjectSchema } from './EmojiCreatereactionIdsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUncheckedCreateWithoutUsersInput> = z
  .object({
    id: z.string(),
    name: z.string(),
    roles: z
      .lazy(() => RoleUncheckedCreateNestedManyWithoutEmojiInputObjectSchema)
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
    guildId: z.string(),
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

export const EmojiUncheckedCreateWithoutUsersInputObjectSchema = Schema;
