import { createFileRoute } from "@tanstack/react-router";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/api/public/download-resume")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const assetUrl = new URL(resumeAsset.url, request.url);
        const response = await fetch(assetUrl);

        if (!response.ok) {
          return new Response("Resume PDF not found", { status: response.status });
        }

        return new Response(response.body, {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'attachment; filename="Nikki_Aishwarya_Bhaskarn.pdf"',
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});