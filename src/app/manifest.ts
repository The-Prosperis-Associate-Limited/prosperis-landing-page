import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prosperis Group",
    short_name: "Prosperis",
    description:
      "Prosperis Group company overview, service areas, and portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f4ef",
    theme_color: "#073fa7",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
