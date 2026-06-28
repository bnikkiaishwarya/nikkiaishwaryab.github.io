// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";
import fs from "fs";
import path from "path";

// Serves Lovable CDN assets (/__l5e/assets-v1/...) from public/assets/ locally.
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
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [localAssetsPlugin()],
  },
});
