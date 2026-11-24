import { ArrowUpRight, Clock } from "lucide-react";
import type { DetailPage } from "@/types/content";
import { PageHero } from "./PageHero";
import { BlockRenderer } from "./BlockRenderer";
import { CTASection } from "./CTASection";
import { ServiceCard } from "./Cards";
import { SectionHeading } from "./SectionHeading";
import { catalog, groupTitle, resolveRelated, type Section } from "@/lib/catalog";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

export function DetailTemplate({ section, page }: { section: Section; page: DetailPage }) {
  const cat = catalog[section];
  const related = resolveRelated(page);
  const path = `/${section}/${page.slug}/`;
  const group = groupTitle(section, page.group);

  const aside = (
    <div className="rounded-[16px] border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-[10px] bg-cyan-400/15 text-cyan-400 ring-1 ring-cyan-400/30">
          <Icon name={page.icon} className="size-5" />
        </span>
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/50">{cat.singular} area</p>
          <p className="font-semibold text-white">{group}</p>
        </div>
      </div>
      {page.technologies && page.technologies.length > 0 && (
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/50">Technologies referenced</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {page.technologies.slice(0, 10).map((t) => (
              <li key={t} className="rounded-md bg-white/[0.07] px-2.5 py-1 text-[0.8rem] text-white/85 ring-1 ring-white/10">
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}
      <a href="/contact/business-inquiries/" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-white">
        Discuss your requirements <ArrowUpRight aria-hidden="true" className="size-4" />
      </a>
    </div>
  );

  return (
    <>
      <PageHero
        eyebrow={group}
        title={page.title}
        lead={page.lead}
        seed={path}
        crumbs={[{ label: cat.label, href: `/${section}/` }, { label: page.navTitle ?? page.title }]}
        aside={aside}
      />

      {page.legacyPlatform && (
        <div className="border-b border-line bg-blue-50">
          <p className="container-x flex items-start gap-3 py-4 text-[0.92rem] text-ink-800">
            <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-blue-600" />
            This page describes capabilities with platforms from an earlier generation of enterprise and mobile technology.
            Contact us to discuss current equivalents.
          </p>
        </div>
      )}

      <BlockRenderer blocks={page.blocks} />

      {related.length > 0 && (
        <section className="border-t border-line bg-white py-[clamp(4rem,3rem+3vw,6.5rem)]">
          <div className="container-x">
            <SectionHeading eyebrow="Keep exploring" title="Related capabilities" />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {related.map((r, i) => (
                <ServiceCard key={r.href} href={r.href} title={r.title} summary={r.summary} icon={r.icon} index={i} meta={catalog[r.section].singular} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={section === "industries" ? `Talk to us about ${page.navTitle ?? page.title}.` : `Discuss ${page.navTitle ?? page.title} with GenuineIT.`}
        text="Tell us about your technology, workforce or project needs and our team will follow up."
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": section === "industries" ? "WebPage" : "Service",
          name: page.title,
          description: page.summary,
          url: site.url + path,
          ...(section === "industries"
            ? { about: page.title }
            : { serviceType: page.title, provider: { "@type": "Organization", name: site.name, url: site.url }, areaServed: "United States" }),
        }}
      />
    </>
  );
}
