import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutGuildInputObjectSchema } from './RoleCreateWithoutGuildInput.schema';
import { RoleUncheckedCreateWithoutGuildInputObjectSchema } from './RoleUncheckedCreateWithoutGuildInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateOrConnectWithoutGuildInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleCreateWithoutGuildInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutGuildInputObjectSchema),
    ]),
  })
  .strict();

export const RoleCreateOrConnectWithoutGuildInputObjectSchema = Schema;
