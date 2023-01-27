import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { ParticipationUpdateManyWithoutParticipantRolesNestedInputObjectSchema } from './ParticipationUpdateManyWithoutParticipantRolesNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUpdateWithoutRoleInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    participation: z
      .lazy(
        () => ParticipationUpdateManyWithoutParticipantRolesNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DiscordRoleUpdateWithoutRoleInputObjectSchema = Schema
