import { PageHero } from "@/components/sections/PageHero";
import { CatalogGroups } from "@/components/sections/CatalogGroups";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Enterprise Solutions — ERP, CRM, Content, BI & E-Commerce",
  description:
    "Oracle E-Business Suite, SAP, Microsoft Dynamics, Salesforce, Siebel, enterprise content management, SharePoint, BI and data warehousing, and e-commerce solutions from GenuineIT.",
  path: "/solutions/",
});

const platforms = ["Oracle E-Business Suite", "SAP", "PeopleSoft", "JD Edwards", "Microsoft Dynamics", "Salesforce", "Siebel", "SharePoint", "Sitecore", "Documentum", "Informatica", "Cognos"];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Enterprise Solutions"
        title="Enterprise applications that work as one."
        lead="GenuineIT helps organizations implement, integrate, upgrade and support the enterprise platforms that run their business — from ERP and CRM to content, analytics and digital commerce."
        crumbs={[{ label: "Solutions" }]}
        seed="solutions-overview"
      />
      <section aria-label="Platforms" className="border-b border-line bg-platinum">
        <div className="container-x flex flex-col gap-4 py-7 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-text-subtle">Platform expertise</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {platforms.map((p) => (
              <li key={p} className="font-display text-[0.98rem] font-semibold text-ink-700">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-white py-[clamp(4rem,3rem+4vw,7.5rem)]">
        <div className="container-x">
          <CatalogGroups section="solutions" />
          <p className="mt-16 max-w-3xl text-[0.88rem] text-text-subtle">
            Platform names are trademarks of their respective owners and describe the technologies our consultants work with;
            they do not indicate a formal vendor partnership.
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
