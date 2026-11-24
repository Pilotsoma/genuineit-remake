import { LinkButton } from "@/components/ui/Button";
import { NetworkGlobe } from "@/components/graphics/NetworkGlobe";

export function CTASection({
  eyebrow = "Start a conversation",
  title = "Let’s Build Your Next Success Story.",
  text = "Connect with our team to discuss your technology, workforce and enterprise consulting needs.",
  primary = { label: "Start a Conversation", href: "/contact/business-inquiries/" },
  secondary = { label: "Contact Our Team", href: "/contact/" },
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-white py-[clamp(3rem,2rem+4vw,6rem)]">
      <div className="container-x">
        <div className="on-dark relative isolate overflow-hidden rounded-[22px] bg-ink-900 px-6 py-14 text-white sm:px-12 md:py-20 lg:px-16">
          <div aria-hidden="true" className="grid-backdrop absolute inset-0 -z-10" />
          <div aria-hidden="true" className="absolute -bottom-40 -right-24 -z-10 w-[560px] max-w-[90vw] opacity-60 md:-bottom-56 md:right-0 md:opacity-90">
            <NetworkGlobe />
          </div>
          <div aria-hidden="true" className="absolute -left-32 -top-32 -z-10 size-96 rounded-full bg-blue-600/25 blur-3xl" />
          <div className="max-w-2xl" data-reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="h-section mt-4 text-white">{title}</h2>
            <p className="lead mt-5">{text}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={primary.href}>{primary.label}</LinkButton>
              <LinkButton href={secondary.href} variant="outline-light" arrow={false}>
                {secondary.label}
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
