import { z } from 'zod';

export const RoleScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'color',
  'hoist',
  'icon',
  'unicode_emoji',
  'position',
  'permissions',
  'managed',
  'mentionable',
  'guild_id',
  'guildId',
  'emojiId',
  'messageId',
]);
