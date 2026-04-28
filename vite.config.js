import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    allowedHosts: "all",
    hmr: {
      protocol: "wss",
      host: "eaved-suzi-shaftless.ngrok-free.dev"
    }
  }
});