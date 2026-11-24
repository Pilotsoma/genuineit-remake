import { PageHero } from "@/components/sections/PageHero";
import { ClientLogoGrid } from "@/components/sections/ClientLogoGrid";
import { CTASection } from "@/components/sections/CTASection";
import { clientLogos, clientsDisclaimer, clientsIntro, itServicesPartnerNames } from "@/content/clients";
import type { ClientLogo } from "@/types/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Clients & Business Partners",
  description: "Public sector agencies, enterprises and IT services firms that GenuineIT partners with to supply IT resources that meet their IT needs.",
  path: "/company/clients-partners/",
});

const groups: { type: ClientLogo["orgType"]; title: string; text: string }[] = [
  { type: "Public sector", title: "Public sector organizations", text: "State agencies and government organizations." },
  { type: "Enterprise", title: "Enterprises", text: "Companies across energy, technology, construction materials and financial services." },
  { type: "Staffing & IT services", title: "Staffing & IT services firms", text: "Consulting, staffing and IT services organizations." },
];

export default function ClientsPage() {
  // An unidentified flag graphic from the legacy grid is held back pending owner review.
  const visible = clientLogos.filter((l) => l.id !== "us-flag");
  return (
    <>
      <PageHero
        eyebrow="Clients & Partners"
        title="Relationships Built on Trust"
        lead={clientsIntro}
        crumbs={[{ label: "Company", href: "/company/" }, { label: "Clients & Partners" }]}
        seed="clients"
      >
        <p className="mt-8 max-w-2xl rounded-[12px] border border-white/15 bg-white/5 p-4 text-[0.9rem] leading-relaxed text-white/75">
          Organizations are grouped by the type of organization they are. Some engagements are direct and others are delivered
          through staffing or IT-services partners; inclusion here does not describe the nature of an individual relationship.
        </p>
      </PageHero>

      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x space-y-16">
          {groups.map((g) => {
            const logos = visible.filter((l) => l.orgType === g.type);
            return (
              <section key={g.type} aria-labelledby={`g-${g.type}`}>
                <div className="mb-6 flex flex-col gap-1 md:flex-row md:items-end md:justify-between" data-reveal>
                  <h2 id={`g-${g.type}`} className="font-display text-[1.6rem] font-bold text-ink-900">
                    {g.title}
                  </h2>
                  <p className="text-text-muted">
                    {g.text} <span className="text-text-subtle">· {logos.length}</span>
                  </p>
                </div>
                <ClientLogoGrid logos={logos} />
              </section>
            );
          })}
          <p className="border-t border-line pt-6 text-[0.88rem] text-text-subtle">* {clientsDisclaimer}</p>
        </div>
      </section>

      <section className="bg-platinum py-[clamp(4rem,3rem+3vw,6rem)]">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div data-reveal>
            <p className="eyebrow">IT services partners</p>
            <h2 className="mt-4 font-display text-[1.75rem] font-bold leading-tight text-ink-900">We are partnered with these organizations to supply IT resources.</h2>
          </div>
          <ul data-reveal className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {itServicesPartnerNames.map((n) => (
              <li key={n} className="border-t border-line-strong py-3.5 font-medium text-ink-800">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection title="Become a GenuineIT partner." text="If you believe your company and GenuineIT could create value together, we would like to hear from you." primary={{ label: "Partner with us", href: "/contact/partnerships/" }} />
    </>
  );
}
