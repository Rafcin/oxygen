import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutGuildInputObjectSchema } from './RoleUpdateWithoutGuildInput.schema';
import { RoleUncheckedUpdateWithoutGuildInputObjectSchema } from './RoleUncheckedUpdateWithoutGuildInput.schema';
import { RoleCreateWithoutGuildInputObjectSchema } from './RoleCreateWithoutGuildInput.schema';
import { RoleUncheckedCreateWithoutGuildInputObjectSchema } from './RoleUncheckedCreateWithoutGuildInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutGuildInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => RoleUpdateWithoutGuildInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutGuildInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoleCreateWithoutGuildInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutGuildInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpsertWithWhereUniqueWithoutGuildInputObjectSchema = Schema;
