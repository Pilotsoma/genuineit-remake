import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

// The legacy site served no robots.txt (404), i.e. everything was crawlable, including the
// LCA PDFs. That behaviour is preserved; only the PHP form endpoint is excluded.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
