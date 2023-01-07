import { Context } from "src/backend/context";
import { rule } from "trpc-shield";

export const isAuthenticated = rule<Context>()(
  async (ctx, type, path, input, rawInput) => {
    //@ts-ignore
    return ctx.user !== null;
  }
);
