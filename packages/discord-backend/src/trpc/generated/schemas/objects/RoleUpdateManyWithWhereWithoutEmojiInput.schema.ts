import { z } from 'zod';
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema';
import { RoleUpdateManyMutationInputObjectSchema } from './RoleUpdateManyMutationInput.schema';
import { RoleUncheckedUpdateManyWithoutRolesInputObjectSchema } from './RoleUncheckedUpdateManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutEmojiInput> = z
  .object({
    where: z.lazy(() => RoleScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => RoleUpdateManyMutationInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateManyWithoutRolesInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpdateManyWithWhereWithoutEmojiInputObjectSchema = Schema;
