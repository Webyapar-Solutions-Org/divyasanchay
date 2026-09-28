import type { MetadataRoute } from "next";
import { defaultDescription, siteName, siteUrl } from "./seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Divyasanchay",
    description: defaultDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#123378",
    categories: ["finance", "business"],
    lang: "en-IN",
    id: siteUrl,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
