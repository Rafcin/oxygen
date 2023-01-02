import { z } from 'zod';
import { MessageCreatereactionIdsInputObjectSchema } from './MessageCreatereactionIdsInput.schema';
import { MessageCreateuserIdsInputObjectSchema } from './MessageCreateuserIdsInput.schema';
import { MessageCreatechannelIdsInputObjectSchema } from './MessageCreatechannelIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageCreateManyInput> = z
  .object({
    id: z.string(),
    thread: z.boolean().optional().nullable(),
    channel_id: z.string(),
    content: z.string(),
    timestamp: z.string(),
    edited_timestamp: z.string().optional().nullable(),
    tts: z.boolean(),
    mention_everyone: z.boolean(),
    reactionIds: z
      .union([
        z.lazy(() => MessageCreatereactionIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    nonce: z.string().optional().nullable(),
    pinned: z.boolean(),
    webhook_id: z.string().optional().nullable(),
    message_discord_type: z.number(),
    flags: z.number().optional().nullable(),
    application_id: z.string().optional().nullable(),
    position: z.number().optional().nullable(),
    userIds: z
      .union([
        z.lazy(() => MessageCreateuserIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    channelIds: z
      .union([
        z.lazy(() => MessageCreatechannelIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const MessageCreateManyInputObjectSchema = Schema;
