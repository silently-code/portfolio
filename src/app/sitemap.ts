import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Fixed date on purpose: Cache Components forbids new Date() during prerender. Update it when content changes.
const LAST_UPDATED = "2026-10-25";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 1 }];
}
