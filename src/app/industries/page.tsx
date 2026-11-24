import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { IndustryCard } from "@/components/sections/Cards";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { industries, industryGroups, additionalSectors } from "@/content/industries";

export const metadata = pageMetadata({
  title: "Industries — Energy, Manufacturing, Financial Services & Government",
  description:
    "GenuineIT supports energy and utilities, oil and gas, manufacturing, aerospace and defense, banking, insurance, healthcare, life sciences, government, transportation, communications and retail.",
  path: "/industries/",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Domain knowledge that makes technology work harder."
        lead="Our consultants combine technology skills with an understanding of the challenges, regulations and value chains of the industries they serve."
        crumbs={[{ label: "Industries" }]}
        seed="industries-overview"
      >
        <nav aria-label="Industry groups" className="mt-10 flex flex-wrap gap-2">
          {industryGroups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15">
              {g.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="bg-white py-[clamp(4rem,3rem+4vw,7.5rem)]">
        <div className="container-x space-y-20">
          {industryGroups.map((g) => {
            const list = industries.filter((i) => i.group === g.id);
            return (
              <section key={g.id} id={g.id} aria-labelledby={`h-${g.id}`} className="scroll-mt-28">
                <div data-reveal className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <h2 id={`h-${g.id}`} className="font-display text-[1.75rem] font-bold text-ink-900">
                    {g.title}
                  </h2>
                  <p className="max-w-md text-[0.98rem] text-text-muted">{g.description}</p>
                </div>
                <div className={`grid gap-4 sm:grid-cols-2 ${list.length >= 4 ? "lg:grid-cols-4" : list.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
                  {list.map((p, i) => (
                    <IndustryCard key={p.slug} href={`/industries/${p.slug}/`} title={p.title} summary={p.summary} icon={p.icon} index={i} />
                  ))}
                </div>
              </section>
            );
          })}

          <section aria-labelledby="h-more" className="rounded-[16px] border border-line bg-platinum p-8 md:p-10" data-reveal>
            <h2 id="h-more" className="font-display text-xl font-bold text-ink-900">
              Also served through our Professional Services practice
            </h2>
            <p className="mt-2 max-w-3xl text-text-muted">
              We are extending our competence in serving clients in additional product-centric industries.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {additionalSectors.map((s) => (
                <li key={s} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-800 ring-1 ring-line">
                  {s}
                </li>
              ))}
            </ul>
            <Link href="/services/professional-services/" className="mt-6 inline-block font-semibold text-blue-600 link-u">
              About Professional Services →
            </Link>
          </section>
        </div>
      </section>
      <CTASection />
    </>
  );
}
