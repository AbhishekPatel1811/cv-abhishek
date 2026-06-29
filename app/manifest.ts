import type { MetadataRoute } from "next";
import { profile } from "@/lib/content/profile";

// PWA manifest (Next metadata route -> /manifest.webmanifest). Icons live under
// /public/favicons; theme is the monochrome white-default surface.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} - ${profile.role}`,
    short_name: profile.name,
    description: profile.subhead,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      {
        src: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
