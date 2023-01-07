import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutGuildInputObjectSchema } from './RoleUpdateWithoutGuildInput.schema';
import { RoleUncheckedUpdateWithoutGuildInputObjectSchema } from './RoleUncheckedUpdateWithoutGuildInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutGuildInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RoleUpdateWithoutGuildInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutGuildInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpdateWithWhereUniqueWithoutGuildInputObjectSchema = Schema;
