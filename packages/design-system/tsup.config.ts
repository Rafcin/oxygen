import { defineConfig } from "tsup";
import pkg from "./package.json";

const external = [...Object.keys(pkg.peerDependencies || {})];
const tsupConfig = defineConfig({
  entryPoints: ["./src/index.tsx", "./src/styles.ts"],
  external,
  format: ["cjs", "esm"],
  inject: ["./src/react-shim.js"],
  dts: true,
  legacyOutput: true,
  sourcemap: true,
  clean: false,
  splitting: false,
});

// eslint-disable-next-line import/no-default-export
export default tsupConfig;
