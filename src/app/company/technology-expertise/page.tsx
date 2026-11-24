import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { technologyExpertise, companyProfile } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technology Expertise — SAP, Oracle, PeopleSoft, Salesforce & More",
  description:
    "GenuineIT consultants work across SAP, Oracle, PeopleSoft, JD Edwards, Salesforce, Sitecore, SharePoint, Azure, AWS, SQL Server, DB2, Selenium and other enterprise technologies.",
  path: "/company/technology-expertise/",
});

export default function TechnologyPage() {
  const total = technologyExpertise.reduce((n, t) => n + t.items.length, 0);
  return (
    <>
      <PageHero
        eyebrow="Technology Expertise"
        title="Consultants across the enterprise technology stack."
        lead={companyProfile.specialization}
        crumbs={[{ label: "Company", href: "/company/" }, { label: "Technology Expertise" }]}
        seed="technology"
      >
        <nav aria-label="Technology categories" className="mt-10 flex flex-wrap gap-2">
          {technologyExpertise.map((t) => (
            <a key={t.category} href={`#${slug(t.category)}`} className="rounded-full bg-white/10 px-3.5 py-1.5 text-[0.85rem] font-medium text-white ring-1 ring-white/15 hover:bg-white/15">
              {t.category}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x">
          <p className="max-w-3xl text-[0.95rem] text-text-subtle">
            {total} platforms and roles in {technologyExpertise.length} categories, as listed on our company profile. Names are
            trademarks of their respective owners and describe consultant skills — they do not indicate formal vendor partnerships.
          </p>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {technologyExpertise.map((t, i) => (
              <section key={t.category} id={slug(t.category)} aria-labelledby={`${slug(t.category)}-h`} className="grid scroll-mt-28 gap-6 py-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
                <div data-reveal>
                  <span className="font-display text-sm font-bold tabular-nums text-blue-600">{String(i + 1).padStart(2, "0")}</span>
                  <h2 id={`${slug(t.category)}-h`} className="mt-2 font-display text-[1.6rem] font-bold leading-tight text-ink-900">
                    {t.category}
                  </h2>
                  <p className="mt-2 text-text-muted">{t.description}</p>
                </div>
                <ul data-reveal className="grid content-start gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-[10px] border border-line bg-platinum px-4 py-3 text-[0.95rem] font-medium text-ink-800">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Need a consultant with these skills?" text="Tell us about your platform and the roles you need — our staffing team will follow up." primary={{ label: "Request Talent", href: "/services/it-staffing/#request-talent" }} />
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
