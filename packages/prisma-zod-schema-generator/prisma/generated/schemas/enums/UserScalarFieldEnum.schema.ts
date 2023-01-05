import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'username',
  'discriminator',
  'avatar',
  'bot',
  'system',
  'mfa_enabled',
  'banner',
  'accent_color',
  'locale',
  'verified',
  'email',
  'emailVerified',
  'flags',
  'premium_class',
  'public_flags',
  'guildIds',
  'emojiIds',
  'messageIds',
  'channelIds',
]);
