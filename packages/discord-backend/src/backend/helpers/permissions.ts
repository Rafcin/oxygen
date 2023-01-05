import { rule } from "trpc-shield";
import { Context } from "../api/context";

export const isAuthenticated = rule<Context>()(
  async (ctx, type, path, input, rawInput) => {
    //@ts-ignore
    return ctx.user !== null;
  }
);
