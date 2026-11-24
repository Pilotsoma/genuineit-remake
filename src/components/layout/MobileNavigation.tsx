"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { mainNav } from "@/content/navigation";
import { site } from "@/content/site";

export function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        // trap focus inside the panel + the header toggle
        const focusables = Array.from(
          document.querySelectorAll<HTMLElement>('#mobile-nav a, #mobile-nav button, [aria-controls="mobile-nav"]'),
        ).filter((el) => el.offsetParent !== null);
        const firstEl = focusables[0];
        const lastEl = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl?.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-nav"
      ref={panelRef}
      hidden={!open}
      className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto overscroll-contain border-t border-line bg-white lg:hidden"
    >
      <nav aria-label="Mobile" className="container-x pb-10 pt-4">
        <ul className="divide-y divide-line">
          {mainNav.map((item) => {
            const isOpen = expanded === item.label;
            if (!item.columns) {
              return (
                <li key={item.label}>
                  <Link href={item.href} onClick={onClose} className="flex min-h-14 items-center text-[1.05rem] font-semibold text-ink-900">
                    {item.label}
                  </Link>
                </li>
              );
            }
            const panelId = `m-${item.label.toLowerCase().replace(/\W+/g, "-")}`;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setExpanded(isOpen ? null : item.label)}
                  className="flex min-h-14 w-full items-center justify-between text-left text-[1.05rem] font-semibold text-ink-900"
                >
                  {item.label}
                  <ChevronDown aria-hidden="true" className={`size-5 text-text-subtle transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div id={panelId} hidden={!isOpen} className="pb-5">
                  <Link href={item.href} onClick={onClose} className="mb-3 inline-flex min-h-11 items-center text-sm font-semibold text-blue-600">
                    {item.label} overview →
                  </Link>
                  <div className="space-y-5">
                    {item.columns.map((col) => (
                      <div key={col.title}>
                        <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-text-subtle">{col.title}</p>
                        <ul>
                          {col.links.map((l) => (
                            <li key={l.href}>
                              <Link href={l.href} onClick={onClose} className="flex min-h-11 items-center text-[0.95rem] text-ink-800">
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
          <li>
            <Link href="/compliance/lca/" onClick={onClose} className="flex min-h-14 items-center text-[1.05rem] font-semibold text-ink-900">
              LCA Notices
            </Link>
          </li>
        </ul>
        <div className="mt-6 grid gap-3">
          <Link href="/contact/" onClick={onClose} className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-blue-600 font-semibold text-white">
            Let&rsquo;s Talk
          </Link>
          <a href={site.phone.href} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] ring-1 ring-line font-medium text-ink-900">
            <Phone aria-hidden="true" className="size-4" /> {site.phone.display}
          </a>
          <a href={`mailto:${site.email.general}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] ring-1 ring-line font-medium text-ink-900">
            <Mail aria-hidden="true" className="size-4" /> {site.email.general}
          </a>
        </div>
      </nav>
    </div>
  );
}
