import { z } from 'zod';
import { GuildScalarWhereInputObjectSchema } from './GuildScalarWhereInput.schema';
import { GuildUpdateManyMutationInputObjectSchema } from './GuildUpdateManyMutationInput.schema';
import { GuildUncheckedUpdateManyWithoutGuildsInputObjectSchema } from './GuildUncheckedUpdateManyWithoutGuildsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GuildUpdateManyWithWhereWithoutChannelsInput> = z
  .object({
    where: z.lazy(() => GuildScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => GuildUpdateManyMutationInputObjectSchema),
      z.lazy(() => GuildUncheckedUpdateManyWithoutGuildsInputObjectSchema),
    ]),
  })
  .strict();

export const GuildUpdateManyWithWhereWithoutChannelsInputObjectSchema = Schema;
