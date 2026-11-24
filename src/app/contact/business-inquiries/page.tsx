import { PageHero } from "@/components/sections/PageHero";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Engaging With Us — Business Inquiries",
  description: "Discuss a business situation where GenuineIT may be able to assist — IT consulting, staffing, application development and enterprise solutions.",
  path: "/contact/business-inquiries/",
});

export default function BusinessInquiriesPage() {
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="Engaging with us"
        title="Start a conversation."
        lead={`If you are interested in discussing a business situation where GenuineIT may be able to assist, please email ${site.email.general} or use the form below.`}
        crumbs={[{ label: "Contact", href: "/contact/" }, { label: "Business Inquiries" }]}
      />
      <section className="bg-white py-[clamp(3.5rem,2.5rem+3vw,6rem)]">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-16">
          <div className="rounded-[18px] border border-line bg-white p-6 shadow-card sm:p-10">
            <InquiryForm type="business" heading="Business inquiry" submitLabel="Send inquiry" />
          </div>
          <aside>
            <h2 className="font-display text-xl font-bold text-ink-900">What happens next</h2>
            <ol className="mt-5 space-y-4 text-[0.95rem] text-text-muted">
              <li><strong className="text-ink-900">1. We listen.</strong> Discovery is what we do first — to understand your specific needs.</li>
              <li><strong className="text-ink-900">2. We follow up.</strong> A member of our team contacts you to discuss priorities.</li>
              <li><strong className="text-ink-900">3. We recommend.</strong> We determine which solution best achieves your goals while balancing risk and cost.</li>
            </ol>
            <div className="mt-10">
              <ContactDetails compact />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
