import type { Options } from "tsup";

const tsupOptions: Options = {
  entryPoints: ["src/index.ts"],
  format: "esm",
  dts: true,
  external: ["react"],
  outDir: "dist",
  clean: true,
  minifyWhitespace: true,
};

export default tsupOptions;
