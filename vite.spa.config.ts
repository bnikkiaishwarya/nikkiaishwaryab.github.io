import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import type { Plugin } from "vite";
import fs from "fs";

function localAssetsPlugin(): Plugin {
  return {
    name: "local-assets",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/__l5e/assets-v1/")) return next();
        const filename = req.url.split("/").filter(Boolean).pop() ?? "";
        const localPath = path.join(process.cwd(), "public", "assets", filename);
        if (!fs.existsSync(localPath)) return next();
        const ext = path.extname(filename).toLowerCase();
        const mime: Record<string, string> = {
          ".png": "image/png",
          ".jpg": "image/jpeg",
          ".jpeg": "image/jpeg",
          ".svg": "image/svg+xml",
          ".pdf": "application/pdf",
          ".webp": "image/webp",
        };
        res.writeHead(200, {
          "Content-Type": mime[ext] ?? "application/octet-stream",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        });
        res.end(fs.readFileSync(localPath));
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths(), localAssetsPlugin()],
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
