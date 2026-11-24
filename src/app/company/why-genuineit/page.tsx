import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Icon } from "@/components/ui/Icon";
import { whyGenuineIT, mission } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Why GenuineIT",
  description: "Client-focused delivery, technology and domain expertise, flexible staffing and engagement, and a commitment to long-term relationships and reliable results.",
  path: "/company/why-genuineit/",
});

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why GenuineIT"
        title="Clients don’t pay us for hard work. They pay us for results."
        lead="The strengths below are drawn from how GenuineIT describes its own delivery, principles and values."
        crumbs={[{ label: "Company", href: "/company/" }, { label: "Why GenuineIT" }]}
        seed="why"
      />
      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyGenuineIT.map((w, i) => (
            <article
              key={w.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
              className={`flex flex-col rounded-[16px] border p-8 ${i === 0 ? "on-dark border-ink-900 bg-ink-900 text-white" : "border-line bg-white"}`}
            >
              <span className={`grid size-12 place-items-center rounded-[12px] ${i === 0 ? "bg-cyan-400/15 text-cyan-400" : "bg-blue-50 text-blue-600"}`}>
                <Icon name={w.icon} className="size-5" />
              </span>
              <h2 className={`mt-8 font-display text-[1.35rem] font-bold ${i === 0 ? "text-white" : "text-ink-900"}`}>{w.title}</h2>
              <p className={`mt-3 leading-relaxed ${i === 0 ? "text-white/75" : "text-text-muted"}`}>{w.text}</p>
              <p className={`mt-auto pt-6 text-[0.75rem] font-semibold uppercase tracking-[0.12em] ${i === 0 ? "text-white/45" : "text-text-subtle"}`}>Source: {w.source}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-platinum py-[var(--section-y)]">
        <div className="container-x">
          <h2 className="h-section max-w-3xl text-ink-900" data-reveal>
            Guided by principles we hold ourselves to.
          </h2>
          <ul className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {mission.principles.map((p) => (
              <li key={p.title} data-reveal className="border-t border-line-strong pt-5">
                <p className="font-display text-lg font-bold text-ink-900">{p.title}</p>
                <p className="mt-1 text-text-muted">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
