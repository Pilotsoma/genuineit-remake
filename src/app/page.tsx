import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, FileText, MapPin } from "lucide-react";
import { LinkButton, TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { NetworkGlobe } from "@/components/graphics/NetworkGlobe";
import { PatternArt } from "@/components/graphics/PatternArt";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { IndustryCard } from "@/components/sections/Cards";
import { CTASection } from "@/components/sections/CTASection";
import { ClientLogoGrid } from "@/components/sections/ClientLogoGrid";
import { clientLogos, featuredClientIds, clientsDisclaimer } from "@/content/clients";
import { technologyExpertise, whyGenuineIT, companyProfile } from "@/content/company";
import { getIndustry } from "@/content/industries";
import { jobs } from "@/content/careers";
import { corporateDocuments, certificationReferences } from "@/content/resources";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "IT Consulting, Staffing & Technology Solutions",
    description: site.description,
    path: "/",
  }),
  title: { absolute: "GenuineIT LLC | IT Consulting, Staffing & Technology Solutions" },
};

const capabilities = [
  {
    title: "IT Staffing & Talent Solutions",
    text: "Experienced technology professionals for difficult-to-fill positions, temporary labor spikes and project work — full-time or contract.",
    href: "/services/it-staffing/",
    icon: "Users",
  },
  {
    title: "Technology Consulting",
    text: "Professional services, enterprise architecture, change management and IT outsourcing aligned to measurable business results.",
    href: "/services/professional-services/",
    icon: "Handshake",
  },
  {
    title: "Application Development & Integration",
    text: "Application development and management, ESB and SOA integration, web applications and quality assurance.",
    href: "/services/application-development/",
    icon: "CodeXml",
  },
  {
    title: "Enterprise Applications",
    text: "Oracle E-Business Suite, SAP, Microsoft Dynamics, Salesforce and Siebel implementation, upgrade and support.",
    href: "/solutions/",
    icon: "Layers",
  },
  {
    title: "Cloud Services",
    text: "Cloud expertise and hosted infrastructure that help you consolidate, scale and speed time to market.",
    href: "/services/cloud-services/",
    icon: "Cloud",
  },
  {
    title: "Product Development & Engineering",
    text: "From a rough idea to architecture, development, prototyping, testing and sustenance engineering.",
    href: "/services/product-development/",
    icon: "Rocket",
  },
];

const homeIndustries = ["energy-utilities", "manufacturing", "communications", "defense", "banking", "government"]
  .map((s) => getIndustry(s)!)
  .filter(Boolean);

export default function HomePage() {
  const featured = featuredClientIds.map((id) => clientLogos.find((c) => c.id === id)!).filter(Boolean);
  const jobPreview = jobs.slice(0, 4);

  return (
    <>
      {/* ------------------------------------------------------------------ B. Hero */}
      <section className="on-dark relative isolate overflow-hidden bg-ink-900 text-white">
        <div aria-hidden="true" className="grid-backdrop absolute inset-0 -z-10" />
        <div aria-hidden="true" className="absolute -left-48 top-10 -z-10 size-[640px] rounded-full bg-blue-600/25 blur-[120px]" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink-950/60" />
        <div className="container-x grid min-h-[min(100svh,980px)] items-center gap-10 pb-20 pt-[calc(var(--header-h)+3.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:pb-24">
          <div className="relative z-10">
            <h1 className="h-hero">
              <span className="block motion-safe:animate-rise [animation-delay:80ms]">Technology.</span>
              <span className="block motion-safe:animate-rise [animation-delay:180ms]">Talent.</span>
              <span className="block bg-gradient-to-r from-white via-[#bfe9ff] to-cyan-400 bg-clip-text text-transparent motion-safe:animate-rise [animation-delay:280ms]">
                Transformation.
              </span>
            </h1>
            <p className="lead mt-7 max-w-xl motion-safe:animate-rise [animation-delay:380ms]">
              Empowering organizations with innovative IT solutions, experienced technology professionals and enterprise
              consulting expertise.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row motion-safe:animate-rise [animation-delay:480ms]">
              <LinkButton href="/services/">Explore Our Services</LinkButton>
              <LinkButton href="/careers/" variant="outline-light">
                Discover Career Opportunities
              </LinkButton>
            </div>
            <p className="mt-12 max-w-md border-l-2 border-cyan-400/70 pl-4 text-[0.95rem] italic text-white/70 motion-safe:animate-fade [animation-delay:700ms]">
              “GenuineIT is your trusted IT partner in deploying IT needs and products across the USA and globally.”
            </p>
          </div>
          <div className="relative mx-auto -mt-4 w-full max-w-[340px] sm:max-w-[520px] lg:mt-0 lg:max-w-[620px] motion-safe:animate-fade [animation-delay:200ms]">
            <NetworkGlobe className="w-full" />
            <div className="absolute bottom-[6%] left-0 hidden rounded-[12px] border border-white/12 bg-ink-900/70 px-4 py-3 backdrop-blur-md sm:block">
              <p className="flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-cyan-400">
                <MapPin aria-hidden="true" className="size-3.5" /> Headquarters
              </p>
              <p className="mt-1 text-sm text-white/85">Houston, TX · United States</p>
            </div>
            <div className="absolute right-0 top-[10%] hidden rounded-[12px] border border-white/12 bg-ink-900/70 px-4 py-3 backdrop-blur-md sm:block">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-cyan-400">Our promise</p>
              <p className="mt-1 max-w-[220px] text-sm leading-snug text-white/85">{site.logoTagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ C. Trust */}
      <section aria-labelledby="trust-h" className="border-b border-line bg-white py-16 md:py-20">
        <div className="container-x">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-reveal>
            <div>
              <p className="eyebrow">Business partners &amp; clients</p>
              <h2 id="trust-h" className="mt-3 font-display text-[clamp(1.6rem,1.3rem+1.2vw,2.25rem)] font-bold tracking-[-0.025em] text-ink-900">
                Relationships Built on Trust
              </h2>
              <p className="mt-3 max-w-2xl text-text-muted">
                We partner with organizations across the public and private sectors to supply IT resources that meet their IT needs.
              </p>
            </div>
            <TextLink href="/company/clients-partners/">View all clients &amp; partners</TextLink>
          </div>
          <ClientLogoGrid logos={featured} className="mt-10" compact />
          <p className="mt-6 text-[0.8rem] text-text-subtle">{clientsDisclaimer}</p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ D. Capabilities */}
      <section aria-labelledby="cap-h" className="bg-platinum py-[var(--section-y)]">
        <div className="container-x">
          <SectionHeading
            id="cap-h"
            eyebrow="What we do"
            title="Core capabilities for the modern enterprise."
            text="Talent, consulting and engineering services that integrate seamlessly with your existing IT infrastructure."
            action={<TextLink href="/services/">All services</TextLink>}
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {capabilities.map((c, i) => {
              const big = i === 0;
              return (
                <Link
                  key={c.title}
                  href={c.href}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
                  className={`group relative isolate flex flex-col overflow-hidden rounded-[16px] p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 md:p-8 ${
                    big
                      ? "on-dark min-h-[340px] bg-ink-900 text-white hover:shadow-lift md:col-span-2 lg:col-span-3 lg:row-span-2"
                      : `border border-line bg-white hover:shadow-lift ${i <= 2 ? "lg:col-span-3" : "lg:col-span-2"}`
                  } ${i === 1 || i === 2 ? "lg:col-span-3" : ""}`}
                >
                  {big && (
                    <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-80">
                      <PatternArt seed="staffing-home" variant="graph" className="h-full w-full" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-ink-900 via-ink-900/80 to-transparent" />
                    </div>
                  )}
                  <span
                    className={`grid size-12 place-items-center rounded-[12px] ${
                      big ? "bg-cyan-400/15 text-cyan-400 ring-1 ring-cyan-400/30" : "bg-blue-50 text-blue-600 ring-1 ring-blue-600/10"
                    }`}
                  >
                    <Icon name={c.icon} className="size-[22px]" />
                  </span>
                  <h3 className={`mt-auto pt-10 font-display font-bold leading-tight ${big ? "text-[clamp(1.6rem,1.2rem+1.4vw,2.3rem)]" : "text-[1.25rem]"}`}>{c.title}</h3>
                  <p className={`mt-3 max-w-md leading-relaxed ${big ? "text-white/75" : "text-[0.95rem] text-text-muted"}`}>{c.text}</p>
                  <span className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${big ? "text-cyan-400" : "text-blue-600"}`}>
                    Learn more <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ E. About */}
      <section aria-labelledby="about-h" className="overflow-hidden bg-white py-[var(--section-y)]">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-reveal className="relative order-2 lg:order-1">
            <div className="on-dark relative aspect-[5/4] overflow-hidden rounded-[20px] bg-ink-900">
              <PatternArt seed="about-houston" variant="rings" className="absolute inset-0 h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-white/10 text-white">
                {["Technology skills", "Domain expertise", "Process focus"].map((t) => (
                  <p key={t} className="border-r border-white/10 p-4 text-[0.82rem] font-semibold leading-snug last:border-r-0 sm:p-5 sm:text-sm">
                    {t}
                  </p>
                ))}
              </div>
              <div className="absolute left-6 top-6 rounded-[10px] bg-white/10 px-4 py-2.5 text-sm text-white ring-1 ring-white/15 backdrop-blur-md">
                Headquartered in <strong className="font-semibold">Houston, Texas</strong>
              </div>
            </div>
            <div className="absolute -right-4 -top-8 hidden w-64 rounded-[14px] border border-line bg-white p-5 shadow-lift md:block">
              <p className="font-display text-sm font-bold text-ink-900">“{companyProfile.promise}”</p>
              <p className="mt-2 text-[0.8rem] text-text-subtle">— the GenuineIT promise</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              id="about-h"
              eyebrow="About GenuineIT"
              title="The Right People. The Right Technology. The Right Results."
            />
            <div className="prose-g mt-6" data-reveal>
              <p>{companyProfile.overview}</p>
              <p>
                The key to our success is providing the right people at the right time to every project and client. We combine
                technology skills, domain expertise, process focus and a commitment to long-term client relationships — and we
                believe the value of IT consulting must be delivered through measurable business results.
              </p>
            </div>
            <div className="mt-9" data-reveal>
              <LinkButton href="/company/about/" variant="secondary">
                Discover GenuineIT
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ F. Technology expertise */}
      <section aria-labelledby="tech-h" className="on-dark relative overflow-hidden bg-ink-900 py-[var(--section-y)] text-white">
        <div aria-hidden="true" className="grid-backdrop absolute inset-0" />
        <div className="container-x relative">
          <SectionHeading
            id="tech-h"
            dark
            eyebrow="Technology expertise"
            title="Deep benches across the enterprise technology stack."
            text="GenuineIT specializes in ERP and Microsoft technologies, with consultants across application development, cloud, data, quality assurance and integration."
            action={<TextLink href="/company/technology-expertise/" dark>Full technology expertise</TextLink>}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[16px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {technologyExpertise.map((t, i) => (
              <div key={t.category} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 4) * 60}ms` }} className="bg-ink-900 p-6 md:p-7">
                <p className="font-display text-xs font-bold tabular-nums text-cyan-400">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-[1.08rem] font-bold leading-snug">{t.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {t.items.slice(0, 6).map((item) => (
                    <li key={item} className="rounded-md bg-white/[0.06] px-2 py-1 text-[0.8rem] text-white/80 ring-1 ring-white/10">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[0.8rem] text-white/50">
            Technology names describe skills our consultants work with and do not imply formal vendor partnerships.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ G. Industries */}
      <section aria-labelledby="ind-h" className="bg-white py-[var(--section-y)]">
        <div className="container-x">
          <SectionHeading
            id="ind-h"
            eyebrow="Industries"
            title="Industry insight behind every engagement."
            text="Domain practices that understand the regulations, value chains and pressures of each sector."
            action={<TextLink href="/industries/">All industries</TextLink>}
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeIndustries.map((p, i) => (
              <IndustryCard key={p.slug} href={`/industries/${p.slug}/`} title={p.title} summary={p.summary} icon={p.icon} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ H. Why */}
      <section aria-labelledby="why-h" className="bg-platinum py-[var(--section-y)]">
        <div className="container-x grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading id="why-h" eyebrow="Why GenuineIT" title="A partner measured by results." />
            <p className="lead mt-5" data-reveal>
              Clients don’t pay us for hard work; they pay us for results. Here is what our clients can expect from every
              engagement.
            </p>
            <div className="mt-8" data-reveal>
              <TextLink href="/company/why-genuineit/">Why clients choose GenuineIT</TextLink>
            </div>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {whyGenuineIT.map((w, i) => (
              <li key={w.title} data-reveal className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-start">
                <span className="font-display text-sm font-bold tabular-nums text-blue-600 sm:pt-1">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-[1.25rem] font-bold text-ink-900">{w.title}</h3>
                  <p className="mt-2 max-w-xl text-[0.98rem] leading-relaxed text-text-muted">{w.text}</p>
                </div>
                <span className="hidden size-11 place-items-center rounded-full bg-white text-blue-600 ring-1 ring-line sm:grid">
                  <Icon name={w.icon} className="size-5" />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------------ I. Careers */}
      <section aria-labelledby="car-h" className="relative overflow-hidden bg-white py-[var(--section-y)]">
        <div className="container-x">
          <div className="grid overflow-hidden rounded-[22px] border border-line lg:grid-cols-[1fr_1.1fr]">
            <div className="on-dark relative isolate bg-blue-700 p-8 text-white md:p-12">
              <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-50">
                <PatternArt seed="careers-home" variant="contour" className="h-full w-full" />
              </div>
              <p className="eyebrow !text-white/85">Careers</p>
              <h2 id="car-h" className="h-section mt-4 text-white" data-reveal>
                Build Your Future With GenuineIT.
              </h2>
              <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-white/85" data-reveal>
                We welcome new ideas and innovation from all levels. Employees are encouraged to grow with the company and explore
                a wide range of opportunities — and to find fulfilment, pride and fun while they carve their niche.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal>
                <LinkButton href="/careers/" variant="light">
                  View opportunities
                </LinkButton>
                <LinkButton href="/compliance/lca/" variant="outline-light" arrow={false}>
                  LCA Notices
                </LinkButton>
              </div>
            </div>
            <div className="bg-white p-6 md:p-10">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-text-subtle">Recently listed positions</p>
              <ul className="mt-4 divide-y divide-line">
                {jobPreview.map((j) => (
                  <li key={j.id}>
                    <Link href={`/careers/${j.id}/`} className="group flex items-center justify-between gap-4 py-4">
                      <span>
                        <span className="block font-display text-[1.05rem] font-semibold text-ink-900 group-hover:text-blue-600">{j.title}</span>
                        <span className="mt-1 block text-[0.85rem] text-text-subtle">
                          {j.category} · Houston, TX office · {j.openings} opening
                        </span>
                      </span>
                      <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.8rem] text-text-subtle">
                Positions as listed on our previous careers page. Contact {site.email.careers} to confirm availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ J. Resources */}
      <section aria-labelledby="res-h" className="border-t border-line bg-platinum py-[clamp(4rem,3rem+3vw,6.5rem)]">
        <div className="container-x">
          <SectionHeading id="res-h" eyebrow="Corporate resources" title="Company information & compliance." action={<TextLink href="/resources/">All resources</TextLink>} />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {corporateDocuments.map((d) => (
              <a
                key={d.href}
                href={d.href}
                data-reveal
                className="group flex flex-col rounded-[14px] border border-line bg-white p-6 transition-shadow hover:shadow-lift"
              >
                <span className="grid size-11 place-items-center rounded-[10px] bg-blue-50 text-blue-600">
                  <FileText aria-hidden="true" className="size-5" />
                </span>
                <span className="mt-5 font-display text-lg font-bold text-ink-900">{d.title}</span>
                <span className="mt-2 text-[0.92rem] text-text-muted">{d.description}</span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-blue-600">
                  <Download aria-hidden="true" className="size-4" /> Download {d.type}
                </span>
              </a>
            ))}
            <Link href="/compliance/lca/" data-reveal className="group flex flex-col rounded-[14px] border border-line bg-white p-6 transition-shadow hover:shadow-lift">
              <span className="grid size-11 place-items-center rounded-[10px] bg-blue-50 text-blue-600">
                <Icon name="ShieldCheck" className="size-5" />
              </span>
              <span className="mt-5 font-display text-lg font-bold text-ink-900">Labor Condition Applications</span>
              <span className="mt-2 text-[0.92rem] text-text-muted">Public access to LCA notices and certified documents.</span>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-blue-600">
                View LCA notices <ArrowRight aria-hidden="true" className="size-4" />
              </span>
            </Link>
            <div data-reveal className="flex flex-col rounded-[14px] border border-line bg-white p-6">
              <span className="font-display text-lg font-bold text-ink-900">Program references</span>
              <ul className="mt-4 flex flex-wrap items-center gap-3">
                {certificationReferences.map((c) => (
                  <li key={c.id}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt={c.title} width={c.width} height={c.height} loading="lazy" className="h-11 w-auto" />
                  </li>
                ))}
              </ul>
              <Link href="/resources/#certifications" className="mt-auto pt-5 text-sm font-semibold text-blue-600 link-u self-start">
                About these references
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ K. CTA */}
      <CTASection />
    </>
  );
}
