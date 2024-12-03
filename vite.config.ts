import { defineConfig, transformWithEsbuild, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "REACT_APP_");
  return {
    base: "/",
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          exportType: "named",
          ref: true,
          svgo: false,
          titleProp: true,
        },
        include: "**/*.svg",
        exclude: ["**/node_modules/**", "src/stories/**"],
      }),

      {
        name: "treat-js-files-as-jsx",
        async transform(code, id) {
          if (!id.match(/src\/.*\.js$/)) return null;

          // Use the exposed transform from vite, instead of directly
          // transforming with esbuild
          return transformWithEsbuild(code, id, {
            loader: "jsx",
            jsx: "automatic",
          });
        },
      },
    ],
    assetsInclude: ["/sb-preview/runtime.js"],
    server: {
      open: true,
      port: 3000,
      host: true,
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".js": "jsx",
        },
      },
    },
    envPrefix: "REACT_APP_",
    define: {
      "process.env": env,
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
    publicDir: "./public",
    build: {
      outDir: "./build",
    },
  };
});
