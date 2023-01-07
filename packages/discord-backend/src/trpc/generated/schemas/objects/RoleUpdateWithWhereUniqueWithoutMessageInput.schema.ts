import { z } from 'zod';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutMessageInputObjectSchema } from './RoleUpdateWithoutMessageInput.schema';
import { RoleUncheckedUpdateWithoutMessageInputObjectSchema } from './RoleUncheckedUpdateWithoutMessageInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutMessageInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => RoleUpdateWithoutMessageInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutMessageInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpdateWithWhereUniqueWithoutMessageInputObjectSchema = Schema;
