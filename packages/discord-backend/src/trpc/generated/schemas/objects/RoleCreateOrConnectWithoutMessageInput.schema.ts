import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleCreateWithoutMessageInputObjectSchema } from './RoleCreateWithoutMessageInput.schema';
import { RoleUncheckedCreateWithoutMessageInputObjectSchema } from './RoleUncheckedCreateWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateOrConnectWithoutMessageInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleCreateWithoutMessageInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutMessageInputObjectSchema),
    ]),
  })
  .strict();

export const RoleCreateOrConnectWithoutMessageInputObjectSchema = Schema;
