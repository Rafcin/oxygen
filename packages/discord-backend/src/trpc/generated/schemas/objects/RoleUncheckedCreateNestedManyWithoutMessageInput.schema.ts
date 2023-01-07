import { z } from 'zod';
import { RoleCreateWithoutMessageInputObjectSchema } from './RoleCreateWithoutMessageInput.schema';
import { RoleUncheckedCreateWithoutMessageInputObjectSchema } from './RoleUncheckedCreateWithoutMessageInput.schema';
import { RoleCreateOrConnectWithoutMessageInputObjectSchema } from './RoleCreateOrConnectWithoutMessageInput.schema';
import { RoleCreateManyMessageInputEnvelopeObjectSchema } from './RoleCreateManyMessageInputEnvelope.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutMessageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutMessageInputObjectSchema),
          z.lazy(() => RoleCreateWithoutMessageInputObjectSchema).array(),
          z.lazy(() => RoleUncheckedCreateWithoutMessageInputObjectSchema),
          z
            .lazy(() => RoleUncheckedCreateWithoutMessageInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleCreateOrConnectWithoutMessageInputObjectSchema),
          z
            .lazy(() => RoleCreateOrConnectWithoutMessageInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => RoleCreateManyMessageInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => RoleWhereUniqueInputObjectSchema),
          z.lazy(() => RoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RoleUncheckedCreateNestedManyWithoutMessageInputObjectSchema =
  Schema;
