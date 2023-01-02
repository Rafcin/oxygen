import { z } from 'zod';
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema';
import { RoleUpdateManyMutationInputObjectSchema } from './RoleUpdateManyMutationInput.schema';
import { RoleUncheckedUpdateManyWithoutMention_rolesInputObjectSchema } from './RoleUncheckedUpdateManyWithoutMention_rolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutMessageInput> = z
  .object({
    where: z.lazy(() => RoleScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => RoleUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => RoleUncheckedUpdateManyWithoutMention_rolesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const RoleUpdateManyWithWhereWithoutMessageInputObjectSchema = Schema;
