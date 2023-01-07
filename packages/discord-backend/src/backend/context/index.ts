import { PrismaClient } from "@prisma/client";
import { inferAsyncReturnType } from "@trpc/server";
import { appRouter } from "../../trpc/generated/routers";

export const createContext = async ({ req, res }) => {
  const prisma = new PrismaClient();
  return {
    prisma,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
export type AppRouter = typeof appRouter;
