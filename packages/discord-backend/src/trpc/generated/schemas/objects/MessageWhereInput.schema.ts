import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { RoleListRelationFilterObjectSchema } from './RoleListRelationFilter.schema';
import { ReactionListRelationFilterObjectSchema } from './ReactionListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { ChannelListRelationFilterObjectSchema } from './ChannelListRelationFilter.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.MessageWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MessageWhereInputObjectSchema),
        z.lazy(() => MessageWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MessageWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MessageWhereInputObjectSchema),
        z.lazy(() => MessageWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    thread: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    channel_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    content: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    timestamp: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    edited_timestamp: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    tts: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    mention_everyone: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    mention_roles: z.lazy(() => RoleListRelationFilterObjectSchema).optional(),
    reactions: z.lazy(() => ReactionListRelationFilterObjectSchema).optional(),
    reactionIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    nonce: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    pinned: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    webhook_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    message_type: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    flags: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    application_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    position: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    userIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    channels: z.lazy(() => ChannelListRelationFilterObjectSchema).optional(),
    channelIds: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const MessageWhereInputObjectSchema = Schema;
