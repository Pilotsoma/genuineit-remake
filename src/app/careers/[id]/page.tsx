import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Info, Mail } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { getJob, jobs } from "@/content/careers";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return jobs.map((j) => ({ id: j.id }));
}

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params) {
  const { id } = await params;
  const job = getJob(id);
  if (!job) return {};
  return pageMetadata({
    title: `${job.title} (${job.id.toUpperCase()}) — Careers`,
    description: `${job.title} position at GenuineIT LLC, Houston, TX. ${job.responsibilities[0]}`,
    path: `/careers/${job.id}/`,
  });
}

export default async function JobPage({ params }: Params) {
  const { id } = await params;
  const job = getJob(id);
  if (!job) notFound();
  const mailto = `mailto:${site.email.careers}?subject=${encodeURIComponent(`Application: ${job.title} (${job.id.toUpperCase()})`)}`;

  return (
    <>
      <PageHero
        tone="light"
        eyebrow={job.category}
        title={job.title}
        crumbs={[{ label: "Careers", href: "/careers/" }, { label: job.title }]}
      >
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {[
            ["Location", "Houston, TX office"],
            ["No. of openings", job.openings],
            ["Reference", job.id.toUpperCase()],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-subtle">{k}</dt>
              <dd className="mt-1 font-display text-lg font-bold text-ink-900">{v}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <section className="bg-white py-[clamp(3.5rem,2.5rem+3vw,6rem)]">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-16">
          <article>
            <h2 className="font-display text-2xl font-bold text-ink-900">Job Responsibilities/Skills</h2>
            <ul className="mt-6 space-y-4">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex gap-4 text-[1.02rem] leading-relaxed text-ink-800">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-2xl font-bold text-ink-900">Educational Background and Experience needed</h2>
            {job.education.map((e) => (
              <p key={e} className="mt-4 text-[1.02rem] leading-relaxed text-ink-800">
                {e}
              </p>
            ))}

            <h2 className="mt-12 font-display text-2xl font-bold text-ink-900">How to apply</h2>
            <p className="mt-4 rounded-[12px] border border-line bg-platinum p-5 text-[1.02rem] font-medium leading-relaxed text-ink-900">{job.applyInstructions}</p>

            <Link href="/careers/" className="mt-10 inline-flex items-center gap-2 font-semibold text-blue-600">
              <ArrowLeft aria-hidden="true" className="size-4" /> All positions
            </Link>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[16px] border border-line bg-white p-6 shadow-card">
              <h2 className="font-display text-lg font-bold text-ink-900">Interested in this role?</h2>
              <p className="mt-2 text-[0.94rem] text-text-muted">Email the careers team with your resume, contact details and the position you are seeking.</p>
              <a href={mailto} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-blue-600 font-semibold text-white hover:bg-blue-700">
                <Mail aria-hidden="true" className="size-4" /> Email careers team
              </a>
              <p className="mt-3 text-center text-[0.85rem] text-text-subtle">{site.email.careers}</p>
            </div>
            <p className="flex gap-3 rounded-[12px] border border-line bg-platinum p-4 text-[0.85rem] leading-relaxed text-text-muted">
              <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-blue-600" />
              This posting is reproduced from our previous careers page. Please contact us to confirm that the position is still open.
            </p>
            <Link href="/compliance/lca/" className="block text-[0.9rem] font-semibold text-blue-600 link-u">
              LCA notices
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
