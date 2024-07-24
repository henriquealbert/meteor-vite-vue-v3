import vue from "@vitejs/plugin-vue";
import { meteor } from "meteor-vite/plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
    meteor({
      clientEntry: "imports/entrypoint/vite-client.ts",
    }),
  ],
  optimizeDeps: {
    exclude: ["ts-minitest"],
  },
});
