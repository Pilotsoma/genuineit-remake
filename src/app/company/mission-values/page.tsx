import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { companyProfile, mission } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mission, Vision & Values",
  description: "GenuineIT's mission — Deliver Talent That Delivers Results — with the guiding principles and core values that shape how we execute and behave.",
  path: "/company/mission-values/",
});

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission, Vision & Values"
        title={`“${mission.statement}.”`}
        lead={mission.supporting}
        crumbs={[{ label: "Company", href: "/company/" }, { label: "Mission, Vision & Values" }]}
        seed="mission"
      />

      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div>
            <p className="eyebrow" data-reveal>Vision</p>
          </div>
          <p data-reveal className="font-display text-[clamp(1.35rem,1.05rem+1.2vw,2rem)] font-semibold leading-[1.35] tracking-[-0.015em] text-ink-900">
            {companyProfile.vision}
          </p>
        </div>
      </section>

      <section className="bg-platinum py-[var(--section-y)]">
        <div className="container-x">
          <SectionHeading eyebrow="Guiding principles" title="How we execute." />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[16px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {mission.principles.map((p, i) => (
              <li key={p.title} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 4) * 60}ms` }} className={`bg-white p-7 ${i === 6 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
                <span className="font-display text-sm font-bold tabular-nums text-blue-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-[1.2rem] font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-[0.96rem] leading-relaxed text-text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="on-dark relative overflow-hidden bg-ink-900 py-[var(--section-y)] text-white">
        <div aria-hidden="true" className="grid-backdrop absolute inset-0" />
        <div className="container-x relative">
          <SectionHeading dark eyebrow="Core values" title="How we behave." />
          <dl className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {mission.values.map((v) => (
              <div key={v.title} data-reveal className="grid gap-2 py-6 md:grid-cols-[280px_1fr] md:gap-10">
                <dt className="font-display text-xl font-bold text-white">{v.title}</dt>
                <dd className="text-[1.02rem] leading-relaxed text-white/75">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Engagement model" title="Contract marketing and support plan." />
            <p className="mt-6 text-[1.02rem] leading-relaxed text-text-muted" data-reveal>
              {mission.contractPlan}
            </p>
          </div>
          <div data-reveal className="rounded-[18px] border border-line bg-platinum p-8">
            <h3 className="font-display text-xl font-bold text-ink-900">GenuineIT contract staff provides the following benefits to clients</h3>
            <ul className="mt-6 space-y-4">
              {mission.contractBenefits.map((b) => (
                <li key={b} className="flex gap-3 text-ink-800">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
