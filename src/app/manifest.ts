import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Prosperis Associates Limited",
    short_name: "Prosperis",
    description:
      "Technology, talent and learning solutions that help businesses perform and grow.",
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
