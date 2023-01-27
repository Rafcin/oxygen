import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AccessLevelRoleUpdateOneWithoutDiscordRoleNestedInputObjectSchema } from './AccessLevelRoleUpdateOneWithoutDiscordRoleNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUpdateWithoutParticipationInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    role: z
      .lazy(() => AccessLevelRoleUpdateOneWithoutDiscordRoleNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const DiscordRoleUpdateWithoutParticipationInputObjectSchema = Schema
