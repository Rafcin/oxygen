import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MessageMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    thread: z.literal(true).optional(),
    channel_id: z.literal(true).optional(),
    content: z.literal(true).optional(),
    timestamp: z.literal(true).optional(),
    edited_timestamp: z.literal(true).optional(),
    tts: z.literal(true).optional(),
    mention_everyone: z.literal(true).optional(),
    nonce: z.literal(true).optional(),
    pinned: z.literal(true).optional(),
    webhook_id: z.literal(true).optional(),
    message_discord_type: z.literal(true).optional(),
    flags: z.literal(true).optional(),
    application_id: z.literal(true).optional(),
    position: z.literal(true).optional(),
  })
  .strict();

export const MessageMaxAggregateInputObjectSchema = Schema;
