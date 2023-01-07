import { z } from 'zod';
import { EmojiCreateManyGuildInputObjectSchema } from './EmojiCreateManyGuildInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiCreateManyGuildInputEnvelope> = z
  .object({
    data: z.lazy(() => EmojiCreateManyGuildInputObjectSchema).array(),
  })
  .strict();

export const EmojiCreateManyGuildInputEnvelopeObjectSchema = Schema;
