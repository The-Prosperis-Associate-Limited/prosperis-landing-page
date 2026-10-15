import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prosperis Group",
    short_name: "Prosperis",
    description:
      "Ideas, products, and partnerships built to move people and businesses forward.",
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
