import { defineConfig } from "oxlint";

export default defineConfig({
  $schema: "./node_modules/oxlint/configuration_schema.json",
  plugins: ["jsdoc", "typescript"],
  options: {
    typeAware: true,
    typeCheck: true,
  },
});
