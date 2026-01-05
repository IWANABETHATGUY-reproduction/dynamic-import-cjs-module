import { defineConfig } from "rolldown";

export default defineConfig({
  input: "./src/index.js",
  output: {
    dir: "./rolldown-dist",
    format: "esm",
  },
});
