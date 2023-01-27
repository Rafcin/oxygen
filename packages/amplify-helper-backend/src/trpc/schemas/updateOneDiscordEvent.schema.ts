import { z } from 'zod'
import { DiscordEventSelectObjectSchema } from './objects/DiscordEventSelect.schema'
import { DiscordEventIncludeObjectSchema } from './objects/DiscordEventInclude.schema'
import { DiscordEventUpdateInputObjectSchema } from './objects/DiscordEventUpdateInput.schema'
import { DiscordEventUncheckedUpdateInputObjectSchema } from './objects/DiscordEventUncheckedUpdateInput.schema'
import { DiscordEventWhereUniqueInputObjectSchema } from './objects/DiscordEventWhereUniqueInput.schema'

export const DiscordEventUpdateOneSchema = z.object({
  select: DiscordEventSelectObjectSchema.optional(),
  include: DiscordEventIncludeObjectSchema.optional(),
  data: z.union([
    DiscordEventUpdateInputObjectSchema,
    DiscordEventUncheckedUpdateInputObjectSchema,
  ]),
  where: DiscordEventWhereUniqueInputObjectSchema,
})
