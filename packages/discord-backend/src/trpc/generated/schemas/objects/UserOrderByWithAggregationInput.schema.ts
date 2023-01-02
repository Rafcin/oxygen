import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserCountOrderByAggregateInputObjectSchema } from './UserCountOrderByAggregateInput.schema';
import { UserAvgOrderByAggregateInputObjectSchema } from './UserAvgOrderByAggregateInput.schema';
import { UserMaxOrderByAggregateInputObjectSchema } from './UserMaxOrderByAggregateInput.schema';
import { UserMinOrderByAggregateInputObjectSchema } from './UserMinOrderByAggregateInput.schema';
import { UserSumOrderByAggregateInputObjectSchema } from './UserSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z
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
    flags: z.lazy(() => SortOrderSchema).optional(),
    premium_type: z.lazy(() => SortOrderSchema).optional(),
    public_flags: z.lazy(() => SortOrderSchema).optional(),
    guildIds: z.lazy(() => SortOrderSchema).optional(),
    emojiIds: z.lazy(() => SortOrderSchema).optional(),
    messageIds: z.lazy(() => SortOrderSchema).optional(),
    channelIds: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => UserCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => UserAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => UserMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UserMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => UserSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const UserOrderByWithAggregationInputObjectSchema = Schema;
