import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import solidPlugin from "vite-plugin-solid";
import pwaManifest from "./pwaManifest";

export default defineConfig({
  plugins: [
    solidPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      injectRegister: "auto",
      manifest: pwaManifest,
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
