import { z } from 'zod'
import { DiscordEventScalarWhereInputObjectSchema } from './DiscordEventScalarWhereInput.schema'
import { DiscordEventUpdateManyMutationInputObjectSchema } from './DiscordEventUpdateManyMutationInput.schema'
import { DiscordEventUncheckedUpdateManyWithoutEventInputObjectSchema } from './DiscordEventUncheckedUpdateManyWithoutEventInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventUpdateManyWithWhereWithoutScheduleInput> =
  z
    .object({
      where: z.lazy(() => DiscordEventScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DiscordEventUpdateManyMutationInputObjectSchema),
        z.lazy(() => DiscordEventUncheckedUpdateManyWithoutEventInputObjectSchema),
      ]),
    })
    .strict()

export const DiscordEventUpdateManyWithWhereWithoutScheduleInputObjectSchema = Schema
