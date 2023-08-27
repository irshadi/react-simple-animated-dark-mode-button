import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", "components/index.ts"),
      name: "ThemeIconButton",
      formats: ["es", "umd"],
      fileName: (format) =>
        `react-simple-animated-dark-mode-button.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});
