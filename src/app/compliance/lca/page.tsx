import { Info, Mail } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { LcaExplorer } from "@/components/compliance/LcaExplorer";
import records from "@/content/compliance/lca-records.json";
import type { LcaRecord } from "@/types/content";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Labor Condition Applications (LCA)",
  description: "Public access directory of GenuineIT LLC Labor Condition Application (LCA) records, with LCA numbers, job titles, status and certified documents.",
  path: "/compliance/lca/",
});

export default function LcaPage() {
  const list = records as LcaRecord[];
  const withDocs = list.filter((r) => r.document?.available).length;
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="Compliance"
        title="Labor Condition Applications"
        lead="Public access to GenuineIT LLC Labor Condition Application (LCA) records. Select a record’s PDF to view or download the document."
        crumbs={[{ label: "Compliance" }, { label: "LCA Notices" }]}
      >
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-subtle">Records</dt>
            <dd className="font-display text-2xl font-bold text-ink-900">{list.length}</dd>
          </div>
          <div>
            <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-subtle">Documents available</dt>
            <dd className="font-display text-2xl font-bold text-ink-900">{withDocs}</dd>
          </div>
        </dl>
      </PageHero>
      <section className="bg-white py-[clamp(3rem,2rem+3vw,5.5rem)]">
        <div className="container-x">
          <LcaExplorer records={list} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <p className="flex gap-3 rounded-[12px] border border-line bg-platinum p-5 text-[0.9rem] leading-relaxed text-text-muted">
              <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-600" />
              Records are listed in their original order. Documents are provided as published; this page does not summarize or modify
              official documents. Where a document is marked “pending”, it could not be retrieved from the previous website and is
              being restored.
            </p>
            <p className="flex gap-3 rounded-[12px] border border-line bg-platinum p-5 text-[0.9rem] leading-relaxed text-text-muted">
              <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-600" />
              <span>
                For questions about this page, contact GenuineIT LLC, {site.address.street}, {site.address.suite},{" "}
                {site.address.city}, {site.address.region} {site.address.postalCode}, or{" "}
                <a href={`mailto:${site.email.general}`} className="font-medium text-blue-600 link-u">
                  {site.email.general}
                </a>
                .
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
