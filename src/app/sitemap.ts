import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { industries } from "@/content/industries";
import { jobs } from "@/content/careers";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/company/",
    "/company/about/",
    "/company/mission-values/",
    "/company/technology-expertise/",
    "/company/why-genuineit/",
    "/company/clients-partners/",
    "/company/testimonials/",
    "/services/",
    "/services/it-staffing/",
    "/solutions/",
    "/industries/",
    "/careers/",
    "/compliance/lca/",
    "/contact/",
    "/contact/business-inquiries/",
    "/contact/partnerships/",
    "/resources/",
    "/legal/disclaimer/",
  ];
  const paths = [
    ...staticPaths,
    ...services.map((s) => `/services/${s.slug}/`),
    ...solutions.map((s) => `/solutions/${s.slug}/`),
    ...industries.map((s) => `/industries/${s.slug}/`),
    ...jobs.map((j) => `/careers/${j.id}/`),
  ];
  return paths.map((p) => ({
    url: site.url + p,
    changeFrequency: p === "/" || p.startsWith("/careers") || p === "/compliance/lca/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : p.split("/").length <= 3 ? 0.8 : 0.6,
  }));
}
