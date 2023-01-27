import { z } from 'zod'
import { DiscordEventCreateManyCreatedByInputObjectSchema } from './DiscordEventCreateManyCreatedByInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordEventCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.lazy(() => DiscordEventCreateManyCreatedByInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const DiscordEventCreateManyCreatedByInputEnvelopeObjectSchema = Schema
