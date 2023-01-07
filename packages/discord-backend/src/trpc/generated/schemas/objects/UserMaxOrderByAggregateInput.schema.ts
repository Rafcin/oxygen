import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    username: z.lazy(() => SortOrderSchema).optional(),
    discriminator: z.lazy(() => SortOrderSchema).optional(),
    avatar: z.lazy(() => SortOrderSchema).optional(),
    bot: z.lazy(() => SortOrderSchema).optional(),
    system: z.lazy(() => SortOrderSchema).optional(),
    mfa_enabled: z.lazy(() => SortOrderSchema).optional(),
    banner: z.lazy(() => SortOrderSchema).optional(),
    accent_color: z.lazy(() => SortOrderSchema).optional(),
    locale: z.lazy(() => SortOrderSchema).optional(),
    verified: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    flags: z.lazy(() => SortOrderSchema).optional(),
    premium_type: z.lazy(() => SortOrderSchema).optional(),
    public_flags: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserMaxOrderByAggregateInputObjectSchema = Schema;
