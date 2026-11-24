import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/Cards";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Company",
  description: "Learn about GenuineIT LLC — our company profile, mission and values, technology expertise, clients and partners.",
  path: "/company/",
});

const links = [
  { href: "/company/about/", title: "About GenuineIT", summary: "Company profile, headquarters, philosophy and vision.", icon: "Building" },
  { href: "/company/mission-values/", title: "Mission, Vision & Values", summary: "Guiding principles and core values.", icon: "Target" },
  { href: "/company/technology-expertise/", title: "Technology Expertise", summary: "Platforms and roles our consultants cover.", icon: "Cpu" },
  { href: "/company/why-genuineit/", title: "Why GenuineIT", summary: "The strengths behind our delivery.", icon: "BadgeCheck" },
  { href: "/company/clients-partners/", title: "Clients & Partners", summary: "Organizations we supply IT resources to.", icon: "Handshake" },
  { href: "/company/testimonials/", title: "Testimonials", summary: "What clients have said about us.", icon: "Users" },
];

export default function CompanyHub() {
  return (
    <>
      <PageHero eyebrow="Company" title="About GenuineIT LLC" lead="A global IT consulting and system development services provider headquartered in Houston, Texas." crumbs={[{ label: "Company" }]} seed="company-hub" />
      <section className="bg-white py-[var(--section-y)]">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l, i) => (
            <ServiceCard key={l.href} {...l} index={i} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
