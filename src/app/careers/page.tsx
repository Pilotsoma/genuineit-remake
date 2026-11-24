import Link from "next/link";
import { ArrowUpRight, FileText, Mail, MapPin, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { JobsExplorer } from "@/components/careers/JobsExplorer";
import { careersIntro, jobs, jobCategories } from "@/content/careers";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers — Technology Jobs in Houston, TX",
  description:
    "Explore technology career opportunities with GenuineIT in Houston, Texas: software developers, DevOps and release engineers, Sitecore, .NET and application developers.",
  path: "/careers/",
});

export default function CareersPage() {
  const training = services.find((s) => s.slug === "training")!;
  const program = training.blocks.find((b) => b.kind === "list" && b.variant === "check");
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Future With GenuineIT."
        lead="We welcome new ideas and innovation from all levels and areas of operation — and encourage every employee to grow with the company."
        crumbs={[{ label: "Careers" }]}
        seed="careers"
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#positions" className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-white px-5 font-semibold text-ink-900 hover:bg-blue-50">
            View positions
          </a>
          <a href={`mailto:${site.email.careers}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] px-5 font-semibold text-white ring-1 ring-inset ring-white/30 hover:bg-white/10">
            <Mail aria-hidden="true" className="size-4" /> {site.email.careers}
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Life at GenuineIT" title="Fulfilment, pride and fun — while you carve your niche." />
            <p className="mt-6 text-[1.08rem] leading-relaxed text-text-muted" data-reveal>
              {careersIntro.culture}
            </p>
          </div>
          {program && program.kind === "list" && (
            <div data-reveal className="rounded-[18px] border border-line bg-platinum p-8">
              <h3 className="font-display text-xl font-bold text-ink-900">Training &amp; development for our consultants</h3>
              <ul className="mt-5 grid gap-2.5">
                {program.items.slice(0, 8).map((it) => (
                  <li key={String(it)} className="flex gap-3 text-[0.95rem] text-ink-800">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" /> {String(it)}
                  </li>
                ))}
              </ul>
              <Link href="/services/training/" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-blue-600">
                About our training program <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section id="positions" className="scroll-mt-24 bg-platinum py-[var(--section-y)]">
        <div className="container-x">
          <SectionHeading eyebrow="Positions" title="We are hiring for." text="Positions in our Houston office, as listed on our careers page. Please contact us to confirm current availability." />
          <div className="mt-10">
            <JobsExplorer jobs={jobs} categories={jobCategories} />
          </div>
        </div>
      </section>

      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x grid gap-4 md:grid-cols-3">
          <div data-reveal className="rounded-[16px] border border-line p-7">
            <Mail aria-hidden="true" className="size-6 text-blue-600" />
            <h2 className="mt-5 font-display text-xl font-bold text-ink-900">How to apply</h2>
            <p className="mt-2 text-[0.96rem] leading-relaxed text-text-muted">{careersIntro.contact}</p>
            <a href={`mailto:${site.email.careers}`} className="mt-5 inline-block font-semibold text-blue-600 link-u">
              {site.email.careers}
            </a>
          </div>
          <div data-reveal className="rounded-[16px] border border-line p-7">
            <MapPin aria-hidden="true" className="size-6 text-blue-600" />
            <h2 className="mt-5 font-display text-xl font-bold text-ink-900">Mail your resume</h2>
            <p className="mt-2 text-[0.96rem] leading-relaxed text-text-muted">Postings specify mailing resumes to:</p>
            <address className="mt-3 not-italic font-medium text-ink-800">{site.jobMailingAddress}</address>
          </div>
          <div data-reveal className="rounded-[16px] border border-line p-7">
            <FileText aria-hidden="true" className="size-6 text-blue-600" />
            <h2 className="mt-5 font-display text-xl font-bold text-ink-900">Domestic career opportunities</h2>
            <p className="mt-2 text-[0.96rem] leading-relaxed text-text-muted">
              Candidates for domestic opportunities can apply through our online application form, hosted on Google Forms.
            </p>
            <a href={careersIntro.domesticFormUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 font-semibold text-blue-600">
              Open application form <ArrowUpRight aria-hidden="true" className="size-4" />
              <span className="sr-only">(opens Google Forms in a new tab)</span>
            </a>
          </div>
        </div>
        <div className="container-x mt-4">
          <Link href="/compliance/lca/" data-reveal className="on-dark group flex flex-col gap-4 rounded-[16px] bg-ink-900 p-7 text-white md:flex-row md:items-center md:justify-between">
            <span className="flex items-center gap-4">
              <ShieldCheck aria-hidden="true" className="size-7 shrink-0 text-cyan-400" />
              <span>
                <span className="block font-display text-lg font-bold">Labor Condition Application (LCA) notices</span>
                <span className="text-[0.94rem] text-white/70">Public access to GenuineIT’s LCA records and certified documents.</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-cyan-400">
              View LCA notices <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
