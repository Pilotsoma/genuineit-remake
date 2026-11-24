import Link from "next/link";
import { ArrowUpRight, Download, FileText, Info, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { corporateDocuments, certificationReferences } from "@/content/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Corporate Resources",
  description: "GenuineIT corporate brochure and flyer, compliance notices, and E-Verify, WBENC and minority business enterprise references.",
  path: "/resources/",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero tone="light" eyebrow="Resources" title="Corporate resources" lead="Company documents, compliance information and program references." crumbs={[{ label: "Resources" }]} />
      <section className="bg-white py-[clamp(3.5rem,2.5rem+3vw,6rem)]">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-ink-900">Company documents</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {corporateDocuments.map((d) => (
              <a key={d.href} href={d.href} className="group flex gap-5 rounded-[16px] border border-line p-6 transition-shadow hover:shadow-card">
                <span className="grid size-14 shrink-0 place-items-center rounded-[12px] bg-blue-50 text-blue-600">
                  <FileText aria-hidden="true" className="size-6" />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold text-ink-900 group-hover:text-blue-600">{d.title}</span>
                  <span className="mt-1 block text-[0.94rem] text-text-muted">{d.description}</span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                    <Download aria-hidden="true" className="size-4" /> Download {d.type}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <h2 className="mt-16 font-display text-2xl font-bold text-ink-900">Compliance</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link href="/compliance/lca/" className="group flex gap-5 rounded-[16px] border border-line p-6 transition-shadow hover:shadow-card">
              <span className="grid size-14 shrink-0 place-items-center rounded-[12px] bg-blue-50 text-blue-600">
                <ShieldCheck aria-hidden="true" className="size-6" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold text-ink-900 group-hover:text-blue-600">Labor Condition Applications</span>
                <span className="mt-1 block text-[0.94rem] text-text-muted">LCA records and certified documents.</span>
              </span>
            </Link>
            <Link href="/legal/disclaimer/" className="group flex gap-5 rounded-[16px] border border-line p-6 transition-shadow hover:shadow-card">
              <span className="grid size-14 shrink-0 place-items-center rounded-[12px] bg-blue-50 text-blue-600">
                <Info aria-hidden="true" className="size-6" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold text-ink-900 group-hover:text-blue-600">Disclaimer</span>
                <span className="mt-1 block text-[0.94rem] text-text-muted">Website terms and conditions of use.</span>
              </span>
            </Link>
          </div>

          <h2 id="certifications" className="mt-16 scroll-mt-28 font-display text-2xl font-bold text-ink-900">
            Program &amp; certification references
          </h2>
          <p className="mt-2 max-w-3xl text-text-muted">These references were displayed on our previous website.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {certificationReferences.map((c) => (
              <div key={c.id} className="flex flex-col rounded-[16px] border border-line p-6">
                <div className="flex h-20 items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={c.title} width={c.width} height={c.height} loading="lazy" className="max-h-20 w-auto" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{c.title}</h3>
                <p className="mt-1 text-[0.94rem] text-text-muted">{c.description}</p>
                {c.href && (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-blue-600">
                    {c.linkLabel} <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          <p className="mt-16 text-[0.94rem] text-text-muted">
            GenuineIT employees can find time cards, expense reports and other forms on the{" "}
            <Link href="/resources/employees/" className="font-semibold text-blue-600 link-u">
              Employee Resources
            </Link>{" "}
            page.
          </p>
        </div>
      </section>
    </>
  );
}
