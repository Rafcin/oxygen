import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutEmojisNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutEmojisNestedInput.schema';
import { EmojiUpdateuserIdsInputObjectSchema } from './EmojiUpdateuserIdsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { ReactionUncheckedUpdateManyWithoutEmojisNestedInputObjectSchema } from './ReactionUncheckedUpdateManyWithoutEmojisNestedInput.schema';
import { EmojiUpdatereactionIdsInputObjectSchema } from './EmojiUpdatereactionIdsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiUncheckedUpdateWithoutRolesInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    users: z
      .lazy(() => UserUncheckedUpdateManyWithoutEmojisNestedInputObjectSchema)
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
    guildId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    reactions: z
      .lazy(
        () => ReactionUncheckedUpdateManyWithoutEmojisNestedInputObjectSchema,
      )
      .optional(),
    reactionIds: z
      .union([
        z.lazy(() => EmojiUpdatereactionIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const EmojiUncheckedUpdateWithoutRolesInputObjectSchema = Schema;
