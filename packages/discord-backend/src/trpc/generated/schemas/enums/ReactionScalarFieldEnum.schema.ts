import { z } from 'zod';

export const ReactionScalarFieldEnumSchema = z.enum([
  'id',
  'count',
  'emojiIds',
  'messageIds',
]);
