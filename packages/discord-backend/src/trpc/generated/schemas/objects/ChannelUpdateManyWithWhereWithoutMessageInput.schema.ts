import { z } from 'zod';
import { ChannelScalarWhereInputObjectSchema } from './ChannelScalarWhereInput.schema';
import { ChannelUpdateManyMutationInputObjectSchema } from './ChannelUpdateManyMutationInput.schema';
import { ChannelUncheckedUpdateManyWithoutChannelsInputObjectSchema } from './ChannelUncheckedUpdateManyWithoutChannelsInput.schema';

import type { Prisma } from '../../../../../node_modules/.prisma/client';

const Schema: z.ZodType<Prisma.ChannelUpdateManyWithWhereWithoutMessageInput> =
  z
    .object({
      where: z.lazy(() => ChannelScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ChannelUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ChannelUncheckedUpdateManyWithoutChannelsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ChannelUpdateManyWithWhereWithoutMessageInputObjectSchema = Schema;
