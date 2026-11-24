import Link from "next/link";
import { ArrowRight, Briefcase, Handshake, Users } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact GenuineIT — Houston, TX",
  description: "Contact GenuineIT LLC at 9894 Bissonnet Street, Suite 827, Houston, TX 77036. Call +1 713-230-8558 or email info@genuineitllc.com.",
  path: "/contact/",
});

const routes = [
  { icon: Users, title: "Hire technology talent", text: "Staffing and staff augmentation requests.", href: "/services/it-staffing/#request-talent" },
  { icon: Briefcase, title: "Discuss a business need", text: "Consulting, development and enterprise solutions.", href: "/contact/business-inquiries/" },
  { icon: Handshake, title: "Partner with us", text: "Explore a business partnership.", href: "/contact/partnerships/" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="Contact"
        title="Let’s talk."
        lead="Welcome — we’re glad to have you here. Reach our Houston headquarters by phone or email, or send us a message below."
        crumbs={[{ label: "Contact" }]}
      >
        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {routes.map((r) => (
            <li key={r.title}>
              <Link href={r.href} className="group flex h-full flex-col rounded-[14px] border border-line bg-white p-5 transition-shadow hover:shadow-card">
                <r.icon aria-hidden="true" className="size-5 text-blue-600" />
                <span className="mt-4 font-display font-bold text-ink-900">{r.title}</span>
                <span className="mt-1 text-[0.88rem] text-text-muted">{r.text}</span>
                <ArrowRight aria-hidden="true" className="mt-4 size-4 text-blue-600 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </PageHero>
      <section className="bg-white py-[clamp(3.5rem,2.5rem+3vw,6rem)]">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Contact information</h2>
            <div className="mt-6">
              <ContactDetails />
            </div>
          </div>
          <div className="rounded-[18px] border border-line bg-white p-6 shadow-card sm:p-10">
            <InquiryForm type="general" heading="Send a message" submitLabel="Send message" />
          </div>
        </div>
      </section>
    </>
  );
}
