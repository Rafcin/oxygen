import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutMessageInputObjectSchema } from './RoleUpdateWithoutMessageInput.schema';
import { RoleUncheckedUpdateWithoutMessageInputObjectSchema } from './RoleUncheckedUpdateWithoutMessageInput.schema';
import { RoleCreateWithoutMessageInputObjectSchema } from './RoleCreateWithoutMessageInput.schema';
import { RoleUncheckedCreateWithoutMessageInputObjectSchema } from './RoleUncheckedCreateWithoutMessageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutMessageInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RoleUpdateWithoutMessageInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutMessageInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoleCreateWithoutMessageInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutMessageInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpsertWithWhereUniqueWithoutMessageInputObjectSchema = Schema;
