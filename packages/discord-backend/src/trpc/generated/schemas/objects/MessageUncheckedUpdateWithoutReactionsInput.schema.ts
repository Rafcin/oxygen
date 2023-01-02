import { z } from 'zod';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { RoleUncheckedUpdateManyWithoutMessageNestedInputObjectSchema } from './RoleUncheckedUpdateManyWithoutMessageNestedInput.schema';
import { MessageUpdatereactionIdsInputObjectSchema } from './MessageUpdatereactionIdsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutMessagesNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutMessagesNestedInput.schema';
import { MessageUpdateuserIdsInputObjectSchema } from './MessageUpdateuserIdsInput.schema';
import { ChannelUncheckedUpdateManyWithoutMessageNestedInputObjectSchema } from './ChannelUncheckedUpdateManyWithoutMessageNestedInput.schema';
import { MessageUpdatechannelIdsInputObjectSchema } from './MessageUpdatechannelIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageUncheckedUpdateWithoutReactionsInput> = z
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
    mention_roles: z
      .lazy(() => RoleUncheckedUpdateManyWithoutMessageNestedInputObjectSchema)
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
      .lazy(() => UserUncheckedUpdateManyWithoutMessagesNestedInputObjectSchema)
      .optional(),
    userIds: z
      .union([
        z.lazy(() => MessageUpdateuserIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    channels: z
      .lazy(
        () => ChannelUncheckedUpdateManyWithoutMessageNestedInputObjectSchema,
      )
      .optional(),
    channelIds: z
      .union([
        z.lazy(() => MessageUpdatechannelIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const MessageUncheckedUpdateWithoutReactionsInputObjectSchema = Schema;
