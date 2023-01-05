import { z } from 'zod';

export const AccountScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'account_class',
  'provider',
  'providerAccountId',
  'refresh_token',
  'access_token',
  'expires_at',
  'token_class',
  'scope',
  'id_token',
  'session_state',
]);
