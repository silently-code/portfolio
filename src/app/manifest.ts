import type { MetadataRoute } from "next";
import { profile } from "@/data/resume";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} | Civil Engineer`,
    short_name: "V. K. B. Singh",
    description: "Portfolio of a civil engineer with 25 years in building construction and project management, Mumbai.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f1",
    theme_color: "#16304d",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
