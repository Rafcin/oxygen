import { z } from 'zod';
import { RoleCreateNestedManyWithoutMessageInputObjectSchema } from './RoleCreateNestedManyWithoutMessageInput.schema';
import { ReactionCreateNestedManyWithoutMessagesInputObjectSchema } from './ReactionCreateNestedManyWithoutMessagesInput.schema';
import { MessageCreatereactionIdsInputObjectSchema } from './MessageCreatereactionIdsInput.schema';
import { UserCreateNestedManyWithoutMessagesInputObjectSchema } from './UserCreateNestedManyWithoutMessagesInput.schema';
import { MessageCreateuserIdsInputObjectSchema } from './MessageCreateuserIdsInput.schema';
import { ChannelCreateNestedManyWithoutMessageInputObjectSchema } from './ChannelCreateNestedManyWithoutMessageInput.schema';
import { MessageCreatechannelIdsInputObjectSchema } from './MessageCreatechannelIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateInput> = z
  .object({
    id: z.string(),
    thread: z.boolean(),
    channel_id: z.string(),
    content: z.string(),
    timestamp: z.date().optional(),
    edited_timestamp: z.date().optional().nullable(),
    tts: z.boolean().optional(),
    mention_everyone: z.boolean().optional(),
    mention_roles: z
      .lazy(() => RoleCreateNestedManyWithoutMessageInputObjectSchema)
      .optional(),
    reactions: z
      .lazy(() => ReactionCreateNestedManyWithoutMessagesInputObjectSchema)
      .optional(),
    reactionIds: z
      .union([
        z.lazy(() => MessageCreatereactionIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    nonce: z.string().optional().nullable(),
    pinned: z.boolean().optional(),
    webhook_id: z.string().optional().nullable(),
    message_type: z.number(),
    flags: z.number().optional().nullable(),
    application_id: z.string().optional().nullable(),
    position: z.number().optional().nullable(),
    users: z
      .lazy(() => UserCreateNestedManyWithoutMessagesInputObjectSchema)
      .optional(),
    userIds: z
      .union([
        z.lazy(() => MessageCreateuserIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    channels: z
      .lazy(() => ChannelCreateNestedManyWithoutMessageInputObjectSchema)
      .optional(),
    channelIds: z
      .union([
        z.lazy(() => MessageCreatechannelIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const MessageCreateInputObjectSchema = Schema;
