import { z } from 'zod';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ReactionUpdateManyWithoutMessagesNestedInputObjectSchema } from './ReactionUpdateManyWithoutMessagesNestedInput.schema';
import { MessageUpdatereactionIdsInputObjectSchema } from './MessageUpdatereactionIdsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutMessagesNestedInputObjectSchema } from './UserUpdateManyWithoutMessagesNestedInput.schema';
import { MessageUpdateuserIdsInputObjectSchema } from './MessageUpdateuserIdsInput.schema';
import { ChannelUpdateManyWithoutMessageNestedInputObjectSchema } from './ChannelUpdateManyWithoutMessageNestedInput.schema';
import { MessageUpdatechannelIdsInputObjectSchema } from './MessageUpdatechannelIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUpdateWithoutMention_rolesInput> = z
  .object({
    thread: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    channel_id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    content: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    timestamp: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    edited_timestamp: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    tts: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    mention_everyone: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    reactions: z
      .lazy(() => ReactionUpdateManyWithoutMessagesNestedInputObjectSchema)
      .optional(),
    reactionIds: z
      .union([
        z.lazy(() => MessageUpdatereactionIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    nonce: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    pinned: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    webhook_id: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    message_discord_type: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    flags: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    application_id: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    position: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    users: z
      .lazy(() => UserUpdateManyWithoutMessagesNestedInputObjectSchema)
      .optional(),
    userIds: z
      .union([
        z.lazy(() => MessageUpdateuserIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    channels: z
      .lazy(() => ChannelUpdateManyWithoutMessageNestedInputObjectSchema)
      .optional(),
    channelIds: z
      .union([
        z.lazy(() => MessageUpdatechannelIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const MessageUpdateWithoutMention_rolesInputObjectSchema = Schema;
