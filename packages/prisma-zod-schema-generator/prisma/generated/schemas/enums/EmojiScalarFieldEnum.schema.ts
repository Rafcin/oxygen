import { z } from 'zod';

export const EmojiScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'userIds',
  'require_colons',
  'managed',
  'animated',
  'available',
  'guildId',
  'reactionIds',
]);
