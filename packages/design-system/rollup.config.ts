import { RollupOptions } from "rollup";
import { rollupReact } from "@oxygen/rollup-swc-config";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const input = ["./src/index.ts", "./src/styles.ts"];

export default function rollup(): RollupOptions[] {
  return rollupReact({
    input,
    packageDir: __dirname,
  });
}
