import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const, images: ["/figma-home/family.png"] },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" as const, images: ["/figma-about/hero.png"] },
  { path: "/our-products", priority: 0.9, changeFrequency: "monthly" as const, images: ["/figma-products/hero.png"] },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const, images: ["/figma-contact/hero.png"] },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-29");

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: route.images?.map(absoluteUrl),
  }));
}
