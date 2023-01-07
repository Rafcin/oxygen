import { z } from 'zod';
import { RoleUncheckedCreateNestedManyWithoutEmojiInputObjectSchema } from './RoleUncheckedCreateNestedManyWithoutEmojiInput.schema';
import { UserUncheckedCreateNestedManyWithoutEmojisInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutEmojisInput.schema';
import { EmojiCreateuserIdsInputObjectSchema } from './EmojiCreateuserIdsInput.schema';
import { EmojiCreatereactionIdsInputObjectSchema } from './EmojiCreatereactionIdsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUncheckedCreateWithoutReactionsInput> = z
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
    guildId: z.string(),
    reactionIds: z
      .union([
        z.lazy(() => EmojiCreatereactionIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const EmojiUncheckedCreateWithoutReactionsInputObjectSchema = Schema;
