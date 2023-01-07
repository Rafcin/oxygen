import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleUpdateManyWithoutEmojiNestedInputObjectSchema } from './RoleUpdateManyWithoutEmojiNestedInput.schema';
import { EmojiUpdateuserIdsInputObjectSchema } from './EmojiUpdateuserIdsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { GuildUpdateOneRequiredWithoutEmojisNestedInputObjectSchema } from './GuildUpdateOneRequiredWithoutEmojisNestedInput.schema';
import { ReactionUpdateManyWithoutEmojisNestedInputObjectSchema } from './ReactionUpdateManyWithoutEmojisNestedInput.schema';
import { EmojiUpdatereactionIdsInputObjectSchema } from './EmojiUpdatereactionIdsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpdateWithoutUsersInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    roles: z
      .lazy(() => RoleUpdateManyWithoutEmojiNestedInputObjectSchema)
      .optional(),
    userIds: z
      .union([
        z.lazy(() => EmojiUpdateuserIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    require_colons: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    managed: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    animated: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    available: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Guild: z
      .lazy(() => GuildUpdateOneRequiredWithoutEmojisNestedInputObjectSchema)
      .optional(),
    reactions: z
      .lazy(() => ReactionUpdateManyWithoutEmojisNestedInputObjectSchema)
      .optional(),
    reactionIds: z
      .union([
        z.lazy(() => EmojiUpdatereactionIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const EmojiUpdateWithoutUsersInputObjectSchema = Schema;
