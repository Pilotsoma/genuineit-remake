import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CatalogGroups } from "@/components/sections/CatalogGroups";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/content/services";

export const metadata = pageMetadata({
  title: "IT Services — Staffing, Consulting, Engineering & Cloud",
  description:
    "GenuineIT services span IT staffing and staff augmentation, professional services, application development and integration, cloud and managed services, QA and legacy modernization.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology services, delivered by the right people."
        lead="From technical staffing to application engineering and managed operations, GenuineIT combines technology skills, domain expertise and process focus to deliver measurable business results."
        crumbs={[{ label: "Services" }]}
        seed="services-overview"
      >
        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-white">
          <div>
            <dt className="text-[0.75rem] uppercase tracking-[0.14em] text-white/50">Service pages</dt>
            <dd className="font-display text-2xl font-bold">{services.length + 1}</dd>
          </div>
          <div>
            <dt className="text-[0.75rem] uppercase tracking-[0.14em] text-white/50">Practice areas</dt>
            <dd className="font-display text-2xl font-bold">5</dd>
          </div>
        </dl>
      </PageHero>

      <section className="bg-white py-[clamp(4rem,3rem+4vw,7.5rem)]">
        <div className="container-x">
          <Link
            href="/services/it-staffing/"
            data-reveal
            className="on-dark group relative mb-20 grid overflow-hidden rounded-[18px] bg-ink-900 text-white md:grid-cols-[1.2fr_1fr]"
          >
            <div className="p-8 md:p-12">
              <p className="eyebrow">Core offering</p>
              <h2 className="h-section mt-4 text-white">IT Staffing &amp; Staff Augmentation</h2>
              <p className="lead mt-4 max-w-xl">
                Employees for difficult-to-fill positions, support for temporary labor spikes and project work, and the
                flexibility to test technical skills and team compatibility.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400">
                Explore staffing solutions <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <div className="relative hidden border-l border-white/10 md:block">
              <ul className="grid h-full grid-cols-2">
                {["Contract staffing", "Full-time talent", "Project-based teams", "Managed sourcing"].map((t, i) => (
                  <li key={t} className={`flex items-end border-white/10 p-6 font-display text-lg font-semibold ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}>
                    <span>
                      <span className="block text-xs font-bold text-cyan-400">0{i + 1}</span>
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
          <CatalogGroups
            section="services"
            prepend={{
              talent: [
                {
                  href: "/services/it-staffing/",
                  title: "IT Staffing & Staff Augmentation",
                  summary: "Technology professionals for contract, project-based and full-time needs, through a flexible engagement model.",
                  icon: "Users",
                },
              ],
            }}
          />
        </div>
      </section>
      <CTASection />
    </>
  );
}
