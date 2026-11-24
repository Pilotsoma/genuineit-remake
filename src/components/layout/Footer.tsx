import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { footerNav } from "@/content/navigation";
import { site } from "@/content/site";
import { certificationReferences } from "@/content/resources";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-site-footer className="on-dark relative overflow-hidden bg-ink-950 text-white">
      <div aria-hidden="true" className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
              A global IT consulting and system development services provider headquartered in Houston, Texas — providing
              talented IT professionals and enterprise technology solutions.
            </p>
            <address className="mt-8 space-y-3 text-[0.95rem] not-italic text-white/80">
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white">
                <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-cyan-400" />
                <span>
                  {site.address.street}, {site.address.suite}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}, {site.address.country}
                </span>
              </a>
              <a href={site.phone.href} className="flex items-center gap-3 hover:text-white">
                <Phone aria-hidden="true" className="size-4 shrink-0 text-cyan-400" /> {site.phone.display}
              </a>
              <a href={`mailto:${site.email.general}`} className="flex items-center gap-3 hover:text-white">
                <Mail aria-hidden="true" className="size-4 shrink-0 text-cyan-400" /> {site.email.general}
              </a>
              <a href={`mailto:${site.email.careers}`} className="flex items-center gap-3 hover:text-white">
                <Mail aria-hidden="true" className="size-4 shrink-0 text-cyan-400" /> {site.email.careers}
              </a>
            </address>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 xl:grid-cols-5">
            {footerNav.map((col) => (
              <div key={col.title}>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/50">{col.title}</p>
                <ul className="mt-4 space-y-1">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} className="inline-flex min-h-9 items-center text-[0.92rem] text-white/75 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="grid gap-8 border-b border-white/10 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/50">Program & certification references</p>
            <ul className="mt-4 flex flex-wrap items-center gap-3">
              {certificationReferences.map((c) => (
                <li key={c.id}>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="block rounded-md bg-white p-1.5 transition-opacity hover:opacity-90" title={c.title}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.image} alt={c.title} width={c.width} height={c.height} loading="lazy" className="h-10 w-auto" />
                    </a>
                  ) : (
                    <span className="block rounded-md bg-white p-1.5" title={c.title}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.image} alt={c.title} width={c.width} height={c.height} loading="lazy" className="h-10 w-auto" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.92rem]">
            {site.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-1 text-white/75 hover:text-white">
                  {s.label}
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 py-8 text-[0.85rem] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            Copyright © {site.copyrightStartYear}–{year} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/legal/disclaimer/" className="hover:text-white">Disclaimer</Link>
            </li>
            <li>
              <Link href="/compliance/lca/" className="hover:text-white">LCA Notices</Link>
            </li>
            <li>
              <Link href="/resources/" className="hover:text-white">Corporate Resources</Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="hover:text-white" prefetch={false}>Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
