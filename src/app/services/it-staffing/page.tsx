import Link from "next/link";
import { ArrowRight, Briefcase, Building, Check, Mail, Search } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PatternArt } from "@/components/graphics/PatternArt";
import { mission, brochureStaffing, technologyExpertise } from "@/content/company";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = pageMetadata({
  title: "IT Staffing & Staff Augmentation in Houston",
  description:
    "IT staffing and staff augmentation from GenuineIT: contract, project-based and full-time technology professionals across ERP, Microsoft, cloud, data and QA — headquartered in Houston, Texas.",
  path: "/services/it-staffing/",
});

const models = [
  { title: "Contract staffing", text: "Fulfill temporary labor spikes and satisfy project work with qualified IT professionals." },
  { title: "Full-time talent", text: "Whether you need a full-time or temporary employee, we help you recruit, manage and retain talent at all levels." },
  { title: "Project-based teams", text: "Mobilize the right people, skills and technologies to define and implement your project needs." },
  { title: "Try before you commit", text: "Test an employee’s technical skills and team compatibility through a contract engagement." },
];

export default function StaffingPage() {
  const prof = services.find((s) => s.slug === "professional-services")!;
  return (
    <>
      <PageHero
        eyebrow="Talent & Staffing"
        title="IT Staffing & Staff Augmentation"
        lead="We support the rapidly evolving human capital needs of our clients through a flexible and adaptable engagement model — providing the right people at the right time to every project."
        crumbs={[{ label: "Services", href: "/services/" }, { label: "IT Staffing" }]}
        seed="it-staffing"
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#request-talent" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] bg-blue-600 px-5 font-semibold text-white hover:bg-blue-700">
            Request Talent <ArrowRight aria-hidden="true" className="size-4" />
          </a>
          <Link href="/careers/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] px-5 font-semibold text-white ring-1 ring-inset ring-white/30 hover:bg-white/10">
            I’m a technology professional
          </Link>
        </div>
      </PageHero>

      {/* Two journeys */}
      <section aria-label="Choose your path" className="relative z-10 -mt-px bg-white">
        <div className="container-x grid gap-4 py-14 md:grid-cols-2">
          <div data-reveal className="rounded-[18px] border border-line bg-platinum p-8 md:p-10">
            <span className="grid size-12 place-items-center rounded-[12px] bg-blue-600 text-white">
              <Building aria-hidden="true" className="size-5" />
            </span>
            <h2 className="mt-6 font-display text-2xl font-bold text-ink-900">For employers</h2>
            <p className="mt-3 text-text-muted">Quality, trustworthy IT staff your organization needs to maintain operations — close to home.</p>
            <ul className="mt-6 space-y-1">
              {[
                { label: "Request talent", href: "#request-talent" },
                { label: "Discuss staffing requirements", href: "/contact/business-inquiries/" },
                { label: "Contact our team", href: "/contact/" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="group flex min-h-11 items-center justify-between border-b border-line py-2 font-semibold text-ink-900 hover:text-blue-600">
                    {l.label} <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="on-dark relative isolate overflow-hidden rounded-[18px] bg-ink-900 p-8 text-white md:p-10">
            <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-60">
              <PatternArt seed="professionals-path" variant="graph" className="h-full w-full" />
            </div>
            <span className="grid size-12 place-items-center rounded-[12px] bg-cyan-400/15 text-cyan-400 ring-1 ring-cyan-400/30">
              <Briefcase aria-hidden="true" className="size-5" />
            </span>
            <h2 className="mt-6 font-display text-2xl font-bold">For professionals</h2>
            <p className="mt-3 text-white/75">Grow with the company and explore a wide range of opportunities, with training and mentoring along the way.</p>
            <ul className="mt-6 space-y-1">
              {[
                { label: "Explore opportunities", href: "/careers/" },
                { label: "View job details", href: "/careers/#positions" },
                { label: "Contact the careers team", href: `mailto:${site.email.careers}` },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="group flex min-h-11 items-center justify-between border-b border-white/10 py-2 font-semibold hover:text-cyan-400">
                    {l.label} <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Workforce challenges */}
      <section className="bg-white pb-[var(--section-y)] pt-10">
        <div className="container-x grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Workforce challenges" title="Contract staff that solves real hiring problems." />
            <p className="lead mt-5" data-reveal>
              {prof.lead}
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-text-subtle" data-reveal>
              GenuineIT contract staff provides clients with
            </p>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {mission.contractBenefits.map((b, i) => (
                <li key={b} data-reveal className="flex gap-5 py-5">
                  <span className="font-display text-sm font-bold tabular-nums text-blue-600">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[1.05rem] leading-relaxed text-ink-800">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="bg-platinum py-[var(--section-y)]">
        <div className="container-x">
          <SectionHeading eyebrow="Engagement models" title="Flexible ways to add capacity." text="A flexible and adaptable engagement model for every kind of workforce need." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((m, i) => (
              <div key={m.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }} className="rounded-[14px] border border-line bg-white p-7">
                <span className="font-display text-sm font-bold text-blue-600">0{i + 1}</span>
                <h3 className="mt-4 font-display text-[1.2rem] font-bold text-ink-900">{m.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-text-muted">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure: staffing services */}
      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Staffing services" title="From augmentation to managed sourcing." />
            <div className="prose-g mt-6" data-reveal>
              <p>{brochureStaffing.staffAugmentation}</p>
              <p>{brochureStaffing.managedSourcing}</p>
              <p>{brochureStaffing.directManagement}</p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2" data-reveal>
              {brochureStaffing.services.map((s) => (
                <li key={s} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-600/15">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div data-reveal className="rounded-[16px] border border-line p-7">
              <h3 className="font-display text-lg font-bold text-ink-900">Managing your resources</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {brochureStaffing.managedSourcingServices.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-ink-800">
                    <Check aria-hidden="true" className="size-4 text-blue-600" strokeWidth={2.4} /> {s}
                  </li>
                ))}
              </ul>
            </div>
            {brochureStaffing.keyPoints.map((k) => (
              <div key={k.title} data-reveal className="rounded-[16px] border border-line p-7">
                <h3 className="font-display text-lg font-bold text-ink-900">{k.title}</h3>
                <p className="mt-2 text-[0.96rem] leading-relaxed text-text-muted">{k.text}</p>
              </div>
            ))}
            <div data-reveal className="rounded-[16px] bg-ink-900 p-7 text-white on-dark">
              <h3 className="font-display text-lg font-bold">Small and growing businesses</h3>
              <p className="mt-2 text-[0.96rem] leading-relaxed text-white/75">{brochureStaffing.smallBusiness}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How we recruit */}
      <section className="on-dark relative overflow-hidden bg-ink-900 py-[var(--section-y)] text-white">
        <div aria-hidden="true" className="grid-backdrop absolute inset-0" />
        <div className="container-x relative grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div>
            <SectionHeading dark eyebrow="How we recruit" title="A wide network, matched to your requirements." />
          </div>
          <div className="prose-g [&_p]:!text-white/80" data-reveal>
            <p>
              GenuineIT has a staffing team that helps us recruit consultants to meet customer and vendor needs, along with
              relationships with subcontracting companies who supply resources to meet client needs.
            </p>
            <p>
              We network in the community and use professional networks such as LinkedIn, Facebook and Twitter, job portals such as
              Dice, Indeed, Monster and TechFetch, and university websites to find matching resumes for customer needs.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {technologyExpertise.slice(0, 6).map((t) => (
                <div key={t.category} className="rounded-[12px] border border-white/10 bg-white/[0.03] p-4">
                  <p className="font-display font-semibold text-white">{t.category}</p>
                  <p className="mt-1 text-[0.85rem] text-white/60">{t.items.slice(0, 4).join(" · ")}</p>
                </div>
              ))}
            </div>
            <Link href="/company/technology-expertise/" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-white">
              See all technology expertise <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="request-talent" className="scroll-mt-24 bg-platinum py-[var(--section-y)]">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Request talent" title="Tell us about the roles you need to fill." />
            <p className="mt-5 text-text-muted" data-reveal>
              Share the skills, engagement type and timing you have in mind. A member of our team will follow up to discuss your
              requirements.
            </p>
            <div className="mt-8 space-y-3 text-[0.95rem]" data-reveal>
              <a href={`mailto:${site.email.general}`} className="flex items-center gap-3 font-medium text-ink-800 hover:text-blue-600">
                <Mail aria-hidden="true" className="size-4 text-blue-600" /> {site.email.general}
              </a>
              <Link href="/careers/" className="flex items-center gap-3 font-medium text-ink-800 hover:text-blue-600">
                <Search aria-hidden="true" className="size-4 text-blue-600" /> Looking for a job? Visit Careers
              </Link>
            </div>
          </div>
          <div className="rounded-[18px] border border-line bg-white p-6 shadow-card sm:p-10">
            <InquiryForm type="staffing" submitLabel="Submit staffing request" />
          </div>
        </div>
      </section>

      <CTASection title="Build your team with GenuineIT." text="Talk with us about contract, project-based and full-time technology talent." />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "IT Staffing & Staff Augmentation",
          serviceType: "IT staffing and staff augmentation",
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: "United States",
          url: `${site.url}/services/it-staffing/`,
        }}
      />
    </>
  );
}
