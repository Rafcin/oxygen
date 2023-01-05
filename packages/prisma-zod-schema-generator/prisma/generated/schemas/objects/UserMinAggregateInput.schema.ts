import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    username: z.literal(true).optional(),
    discriminator: z.literal(true).optional(),
    avatar: z.literal(true).optional(),
    bot: z.literal(true).optional(),
    system: z.literal(true).optional(),
    mfa_enabled: z.literal(true).optional(),
    banner: z.literal(true).optional(),
    accent_color: z.literal(true).optional(),
    locale: z.literal(true).optional(),
    verified: z.literal(true).optional(),
    email: z.literal(true).optional(),
    emailVerified: z.literal(true).optional(),
    flags: z.literal(true).optional(),
    premium_class: z.literal(true).optional(),
    public_flags: z.literal(true).optional(),
  })
  .strict();

export const UserMinAggregateInputObjectSchema = Schema;
