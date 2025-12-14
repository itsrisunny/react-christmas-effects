import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.js"],
  format: ["cjs", "esm"],
  jsx: "automatic",   // 🔥 THIS LINE FIXES IT
  clean: true
});
