import * as trpc from "@trpc/server";

import { Context } from '../../../context';

import trpcOptions from '../../../options';

export const t = trpc.initTRPC.context<Context>().create(trpcOptions);

export const publicProcedure = t.procedure;



