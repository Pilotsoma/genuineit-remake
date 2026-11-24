import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className={`flex flex-wrap items-center gap-1.5 text-[0.84rem] ${dark ? "text-white/60" : "text-text-subtle"}`}>
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.label + i} className="flex items-center gap-1.5">
                {c.href && !last ? (
                  <Link href={c.href} className={`transition-colors ${dark ? "hover:text-white" : "hover:text-blue-600"}`}>
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current={last ? "page" : undefined} className={dark ? "text-white/90" : "text-ink-800"}>
                    {c.label}
                  </span>
                )}
                {!last && <ChevronRight aria-hidden="true" className="size-3.5 opacity-60" />}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: site.url + c.href } : {}),
          })),
        }}
      />
    </>
  );
}
