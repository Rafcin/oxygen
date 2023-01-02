import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { GuildUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './GuildUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { UserUpdateguildIdsInputObjectSchema } from './UserUpdateguildIdsInput.schema';
import { EmojiUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './EmojiUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { UserUpdateemojiIdsInputObjectSchema } from './UserUpdateemojiIdsInput.schema';
import { MessageUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { UserUpdatemessageIdsInputObjectSchema } from './UserUpdatemessageIdsInput.schema';
import { ChannelUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './ChannelUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { UserUpdatechannelIdsInputObjectSchema } from './UserUpdatechannelIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z
  .object({
    username: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    discriminator: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    avatar: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    bot: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    system: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    mfa_enabled: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    banner: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    accent_color: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    locale: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    verified: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    flags: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    premium_type: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    public_flags: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    guilds: z
      .lazy(() => GuildUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    guildIds: z
      .union([
        z.lazy(() => UserUpdateguildIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    emojis: z
      .lazy(() => EmojiUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    emojiIds: z
      .union([
        z.lazy(() => UserUpdateemojiIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    Messages: z
      .lazy(() => MessageUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    messageIds: z
      .union([
        z.lazy(() => UserUpdatemessageIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    channels: z
      .lazy(() => ChannelUncheckedUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    channelIds: z
      .union([
        z.lazy(() => UserUpdatechannelIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateInputObjectSchema = Schema;
