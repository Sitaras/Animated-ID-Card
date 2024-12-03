import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "/Animated-ID-Card",
    plugins: [react()],
    server: {
      open: true,
      port: 3000,
      host: true,
    },
    resolve: {
      alias: {
        utils: "/src/utils",
        components: "/src/components",
        hooks: "/src/hooks",
        assets: "/src/assets",
        styles: "/src/styles",
      },
    },
  };
});
