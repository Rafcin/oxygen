import { z } from 'zod';

export const SanityScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isSane',
]);
