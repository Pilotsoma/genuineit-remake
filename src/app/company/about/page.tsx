import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/sections/Cards";
import { PatternArt } from "@/components/graphics/PatternArt";
import { companyProfile, mission } from "@/content/company";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About GenuineIT — Houston IT Consulting & Staffing",
  description:
    "GenuineIT is a global IT consulting and system development services provider headquartered in Houston, Texas, specializing in ERP, Microsoft technologies and staff augmentation.",
  path: "/company/about/",
});

const capabilityLinks = [
  { href: "/services/it-staffing/", title: "IT Staffing & Staff Augmentation", summary: "The right people at the right time.", icon: "Users" },
  { href: "/services/professional-services/", title: "Professional Services", summary: "Human capital expertise for full-time and temporary needs.", icon: "Handshake" },
  { href: "/services/application-development/", title: "Application Development", summary: "Design, build, integrate and maintain business applications.", icon: "CodeXml" },
  { href: "/solutions/", title: "Enterprise Solutions", summary: "Oracle, SAP, Microsoft Dynamics, Salesforce and more.", icon: "Layers" },
  { href: "/services/training/", title: "Project Management & Training", summary: "Consultant training, mentoring and support.", icon: "GraduationCap" },
  { href: "/services/cloud-services/", title: "Cloud Services", summary: "Re-imagine IT with the cloud as the foundation.", icon: "Cloud" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GenuineIT"
        title="IT consulting and talent, built on a guaranteed commitment."
        lead={companyProfile.overview}
        crumbs={[{ label: "Company", href: "/company/" }, { label: "About GenuineIT" }]}
        seed="about"
      />

      {/* Promise */}
      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <div>
            <p className="eyebrow" data-reveal>Our promise</p>
            <blockquote data-reveal className="mt-5 font-display text-[clamp(2rem,1.4rem+2.6vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink-900">
              “{companyProfile.promise}”
            </blockquote>
            <p className="mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-text-muted" data-reveal>
              {companyProfile.promiseBody}
            </p>
          </div>
          <div data-reveal className="on-dark relative isolate overflow-hidden rounded-[18px] bg-ink-900 p-8 text-white">
            <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-70">
              <PatternArt seed="houston-hq" variant="rings" className="h-full w-full" />
            </div>
            <p className="flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-cyan-400">
              <MapPin aria-hidden="true" className="size-4" /> Headquarters
            </p>
            <p className="mt-4 font-display text-3xl font-bold">Houston, Texas</p>
            <address className="mt-4 not-italic text-white/80">
              {site.legalName}
              <br />
              {site.address.street}, {site.address.suite}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
              <br />
              {site.address.country}
            </address>
            <p className="mt-6 text-[0.95rem] text-white/70">
              Serving clients across the United States and globally as a trusted IT partner.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-platinum py-[var(--section-y)]">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Business philosophy" title="Value, delivered through measurable results." />
          </div>
          <div className="prose-g" data-reveal>
            {companyProfile.welcome.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>{companyProfile.rightPeople}</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="on-dark relative overflow-hidden bg-ink-800 py-[var(--section-y)] text-white">
        <div aria-hidden="true" className="grid-backdrop absolute inset-0" />
        <div className="container-x relative">
          <p className="eyebrow" data-reveal>Vision</p>
          <p data-reveal className="mt-6 max-w-5xl font-display text-[clamp(1.5rem,1.1rem+1.7vw,2.5rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
            {companyProfile.vision}
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[14px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {["Technology skills", "Domain expertise", "Process focus", "Long-term client relationships"].map((t, i) => (
              <div key={t} className="bg-ink-800 p-6" data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
                <span className="font-display text-xs font-bold text-cyan-400">0{i + 1}</span>
                <p className="mt-2 font-display text-lg font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding principles (brochure) */}
      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x">
          <SectionHeading eyebrow="Why we exist" title="We started this company with three things in mind." />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {companyProfile.founded3Things.map((t, i) => (
              <div key={t.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }} className="rounded-[16px] border border-line p-7 md:p-8">
                <span aria-hidden="true" className="font-display text-5xl font-extrabold tracking-tight text-blue-600/90">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-900">{t.title}</h3>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-text-muted">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-platinum py-[var(--section-y)]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Core capabilities"
            title="What GenuineIT offers."
            text={companyProfile.specialization}
            action={
              <Link href="/company/technology-expertise/" className="inline-flex items-center gap-1.5 font-semibold text-blue-600">
                Technology expertise <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            }
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityLinks.map((c, i) => (
              <ServiceCard key={c.href} {...c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & engagement */}
      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">Mission</p>
            <h2 className="h-section mt-4 text-ink-900">“{mission.statement}.”</h2>
            <p className="lead mt-5">{mission.supporting}</p>
            <Link href="/company/mission-values/" className="mt-8 inline-flex items-center gap-1.5 font-semibold text-blue-600">
              Mission, vision &amp; values <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div data-reveal className="rounded-[18px] border border-line bg-platinum p-8">
            <h3 className="font-display text-xl font-bold text-ink-900">Our engagement approach</h3>
            <ol className="mt-6 space-y-5">
              {[
                ["Listen and understand", "We begin each engagement by listening to and understanding your specific needs."],
                ["Determine the right solution", "We collaborate with you to determine which solution most effectively achieves your goals while balancing risk and cost."],
                ["Deliver flexibly", "Work can be performed at your site, at a domestic or offshore center, or any combination."],
                ["Measure by results", "Value delivered through measurable business results — lower costs, quicker time-to-market or greater productivity."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-600 font-display text-sm font-bold text-white">{i + 1}</span>
                  <span>
                    <span className="block font-semibold text-ink-900">{t}</span>
                    <span className="mt-1 block text-[0.95rem] text-text-muted">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
