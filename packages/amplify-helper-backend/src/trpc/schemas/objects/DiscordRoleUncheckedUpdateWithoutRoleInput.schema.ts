import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { ParticipationUncheckedUpdateManyWithoutParticipantRolesNestedInputObjectSchema } from './ParticipationUncheckedUpdateManyWithoutParticipantRolesNestedInput.schema'

import type { Prisma } from '../../../../node_modules/.prisma/client'

const Schema: z.ZodType<Prisma.DiscordRoleUncheckedUpdateWithoutRoleInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    participation: z
      .lazy(
        () =>
          ParticipationUncheckedUpdateManyWithoutParticipantRolesNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const DiscordRoleUncheckedUpdateWithoutRoleInputObjectSchema = Schema
