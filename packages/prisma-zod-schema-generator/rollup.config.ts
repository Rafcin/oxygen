import { RollupOptions } from "rollup";
import { buildConfig } from "@oxygen/rollup-swc-config";

export const input = ["./src/index.ts"];

export default function rollup(): RollupOptions[] {
  return buildConfig({
    input,
    packageDir: ".",
  });
}
