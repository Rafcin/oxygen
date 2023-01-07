import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleOrderByRelationAggregateInputObjectSchema } from './RoleOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { GuildOrderByWithRelationInputObjectSchema } from './GuildOrderByWithRelationInput.schema';
import { ReactionOrderByRelationAggregateInputObjectSchema } from './ReactionOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.EmojiOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    roles: z
      .lazy(() => RoleOrderByRelationAggregateInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
    userIds: z.lazy(() => SortOrderSchema).optional(),
    require_colons: z.lazy(() => SortOrderSchema).optional(),
    managed: z.lazy(() => SortOrderSchema).optional(),
    animated: z.lazy(() => SortOrderSchema).optional(),
    available: z.lazy(() => SortOrderSchema).optional(),
    Guild: z.lazy(() => GuildOrderByWithRelationInputObjectSchema).optional(),
    guildId: z.lazy(() => SortOrderSchema).optional(),
    reactions: z
      .lazy(() => ReactionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    reactionIds: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const EmojiOrderByWithRelationInputObjectSchema = Schema;
