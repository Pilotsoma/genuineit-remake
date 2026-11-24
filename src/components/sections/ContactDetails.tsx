import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";

export function ContactDetails({ compact = false }: { compact?: boolean }) {
  const rows = [
    {
      icon: Phone,
      label: "Phone",
      value: site.phone.display,
      href: site.phone.href,
    },
    { icon: Mail, label: "General inquiries", value: site.email.general, href: `mailto:${site.email.general}` },
    { icon: Mail, label: "Careers", value: site.email.careers, href: `mailto:${site.email.careers}` },
  ];
  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      {rows.map((r) => (
        <a key={r.label} href={r.href} className="group flex items-center gap-4 rounded-[12px] border border-line bg-white p-4 transition-[border-color,box-shadow] hover:border-blue-600/30 hover:shadow-card">
          <span className="grid size-11 shrink-0 place-items-center rounded-[10px] bg-blue-50 text-blue-600">
            <r.icon aria-hidden="true" className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-text-subtle">{r.label}</span>
            <span className="block truncate font-semibold text-ink-900 group-hover:text-blue-600">{r.value}</span>
          </span>
        </a>
      ))}
      <div className="rounded-[12px] border border-line bg-white p-4">
        <div className="flex items-start gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-[10px] bg-blue-50 text-blue-600">
            <MapPin aria-hidden="true" className="size-5" />
          </span>
          <div>
            <span className="block text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-text-subtle">Headquarters</span>
            <address className="mt-0.5 not-italic font-semibold text-ink-900">
              {site.legalName}
              <br />
              {site.address.street}, {site.address.suite}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
              <br />
              {site.address.country}
            </address>
            <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
              Open in Google Maps <ArrowUpRight aria-hidden="true" className="size-3.5" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
