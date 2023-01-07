import { z } from 'zod';

export const MessageScalarFieldEnumSchema = z.enum([
  'id',
  'thread',
  'channel_id',
  'content',
  'timestamp',
  'edited_timestamp',
  'tts',
  'mention_everyone',
  'reactionIds',
  'nonce',
  'pinned',
  'webhook_id',
  'message_type',
  'flags',
  'application_id',
  'position',
  'userIds',
  'channelIds',
]);
