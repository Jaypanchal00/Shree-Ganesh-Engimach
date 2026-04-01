import { MetadataRoute } from "next";

const BASE_URL = "https://shreeganeshengimach.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/products", "/about", "/infrastructure", "/gallery", "/contact"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
