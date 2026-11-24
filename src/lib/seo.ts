import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = site.url + path;
  const desc = description.length > 160 ? description.slice(0, description.lastIndexOf(" ", 157)) + "…" : description;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: `${title} | ${site.shortName}`,
      description: desc,
      locale: "en_US",
      images: [{ url: "/og/genuineit-og.png", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.shortName}`, description: desc, images: ["/og/genuineit-og.png"] },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}
