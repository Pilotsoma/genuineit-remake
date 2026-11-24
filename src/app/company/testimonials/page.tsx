import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { testimonials } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Testimonials",
  description: "What clients have said about working with GenuineIT on IT sourcing and recruitment.",
  path: "/company/testimonials/",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What our clients are saying."
        crumbs={[{ label: "Company", href: "/company/" }, { label: "Testimonials" }]}
        seed="testimonials"
      />
      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure key={t.name} data-reveal className={`flex flex-col rounded-[18px] p-8 md:p-10 ${i === 0 ? "on-dark bg-ink-900 text-white" : "border border-line bg-platinum"}`}>
              <span aria-hidden="true" className={`font-display text-6xl leading-none ${i === 0 ? "text-cyan-400" : "text-blue-600"}`}>“</span>
              <blockquote className={`mt-2 font-display text-[1.3rem] font-semibold leading-[1.45] ${i === 0 ? "text-white" : "text-ink-900"}`}>{t.quote}</blockquote>
              <figcaption className={`mt-auto pt-8 ${i === 0 ? "text-white/70" : "text-text-muted"}`}>
                <span className={`block font-semibold ${i === 0 ? "text-white" : "text-ink-900"}`}>{t.name}</span>
                {t.role}, {t.organization}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
