import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "Mi aplicación",
        short_name: "Mi App",
        description: "Aplicación web offline",
        theme_color: "#18181b",
        background_color: "#18181b",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/src/assets/hero.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/src/aseets/hero.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest,sqlite}"],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["@sqlite.org/sqlite-wasm"],
  },
});
