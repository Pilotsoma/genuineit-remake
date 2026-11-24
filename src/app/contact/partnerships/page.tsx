import { PageHero } from "@/components/sections/PageHero";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Partnering With Us",
  description: "If your company and GenuineIT are strongly aligned and could create value together through a partnership, get in touch.",
  path: "/contact/partnerships/",
});

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnering with us"
        title="Create value together."
        lead="The world we operate in is undergoing dramatic change, creating an environment of volatility, complexity and uncertainty. We partner closely with our clients to navigate it, leveraging a wide range of human capital assets to help deliver their most important initiatives."
        crumbs={[{ label: "Contact", href: "/contact/" }, { label: "Partnerships" }]}
        seed="partnerships"
      />
      <section className="bg-white py-[clamp(3.5rem,2.5rem+3vw,6rem)]">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Tell us about your company</h2>
            <p className="mt-4 leading-relaxed text-text-muted">
              If you believe your company and GenuineIT are strongly aligned and could create value together through a partnership,
              please email{" "}
              <a href={`mailto:${site.email.general}`} className="font-semibold text-blue-600 link-u">
                {site.email.general}
              </a>{" "}
              outlining your interest, contact information and your company’s website address — or use the form.
            </p>
          </div>
          <div className="rounded-[18px] border border-line bg-white p-6 shadow-card sm:p-10">
            <InquiryForm type="partnership" submitLabel="Send partnership inquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
