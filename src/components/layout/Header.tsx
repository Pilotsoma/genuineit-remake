"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { mainNav, type NavItem } from "@/content/navigation";
import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  // Escape / outside click
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        const trigger = document.getElementById(`nav-trigger-${open}`);
        setOpen(null);
        trigger?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (open && headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };
  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  }, []);

  // Transparent only over the home hero; otherwise solid navy. Nav styling is always for a
  // dark surface because the official logo has a white wordmark.
  const transparent = isHome && !scrolled && !open && !mobileOpen;
  const dark = true;

  return (
    <>
    <header
      ref={headerRef}
      data-site-header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        transparent
          ? "on-dark border-b border-white/10 bg-transparent"
          : "on-dark border-b border-white/10 bg-ink-900/95 shadow-[0_10px_30px_-18px_rgb(5_13_26/0.6)] backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <Logo priority />

        <nav aria-label="Main" className="hidden lg:block" onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) => (
              <li key={item.label} className="static">
                {item.columns ? (
                  <MegaTrigger
                    item={item}
                    open={open === item.label}
                    transparent={dark}
                    active={pathname.startsWith(item.href.split("/").slice(0, 2).join("/") + "/")}
                    onToggle={() => setOpen((o) => (o === item.label ? null : item.label))}
                    onHover={() => {
                      cancelClose();
                      setOpen(item.label);
                    }}
                  />
                ) : (
                  <Link
                    href={item.href}
                    onMouseEnter={() => setOpen(null)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`inline-flex h-10 items-center rounded-lg px-3 text-[0.925rem] font-medium transition-colors ${
                      dark ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-ink-800 hover:bg-mist hover:text-ink-900"
                    } ${pathname === item.href ? (dark ? "text-white" : "text-blue-600") : ""}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {mainNav
            .filter((i) => i.columns)
            .map((item) => (
              <MegaMenu key={item.label} item={item} open={open === item.label} onNavigate={() => setOpen(null)} />
            ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact/"
            className={`hidden min-h-11 items-center gap-2 rounded-[10px] px-4 text-[0.925rem] font-semibold transition-colors sm:inline-flex ${
              transparent ? "bg-white text-ink-900 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
          >
            Let&rsquo;s Talk
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <button
            type="button"
            className={`inline-flex size-11 items-center justify-center rounded-[10px] lg:hidden ${
              dark ? "text-white hover:bg-white/10" : "text-ink-900 hover:bg-mist"
            }`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </div>

    </header>
    {/* Rendered outside <header>: its backdrop-filter would otherwise become the containing
        block for this fixed-position panel and trap it inside the header bar. */}
    <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function MegaTrigger({
  item,
  open,
  transparent,
  active,
  onToggle,
  onHover,
}: {
  item: NavItem;
  open: boolean;
  transparent: boolean;
  active: boolean;
  onToggle: () => void;
  onHover: () => void;
}) {
  const hoverTimer = useRef<number | null>(null);
  return (
    <button
      type="button"
      id={`nav-trigger-${item.label}`}
      aria-expanded={open}
      aria-controls={`mega-${slug(item.label)}`}
      onClick={onToggle}
      onMouseEnter={() => {
        if (window.matchMedia("(hover: hover)").matches) hoverTimer.current = window.setTimeout(onHover, 90);
      }}
      onMouseLeave={() => hoverTimer.current && window.clearTimeout(hoverTimer.current)}
      className={`inline-flex h-10 items-center gap-1 rounded-lg px-3 text-[0.925rem] font-medium transition-colors ${
        transparent ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-ink-800 hover:bg-mist hover:text-ink-900"
      } ${open ? (transparent ? "bg-white/10 text-white" : "bg-mist text-ink-900") : ""} ${active ? "!text-white underline decoration-cyan-400 decoration-2 underline-offset-[10px]" : ""}`}
    >
      {item.label}
      <ChevronDown aria-hidden="true" className={`size-4 opacity-70 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
    </button>
  );
}

function MegaMenu({ item, open, onNavigate }: { item: NavItem; open: boolean; onNavigate: () => void }) {
  const id = useId();
  const cols = item.columns ?? [];
  const wide = cols.length >= 4;
  return (
    <div
      id={`mega-${slug(item.label)}`}
      role="region"
      aria-label={`${item.label} menu`}
      hidden={!open}
      className="absolute inset-x-0 top-full border-t border-line bg-white shadow-menu motion-safe:animate-[fade_180ms_ease-out]"
    >
      <div className="container-x grid gap-10 py-9 lg:grid-cols-[1fr_auto]">
        <div className={`grid gap-x-8 gap-y-8 ${wide ? "grid-cols-5" : cols.length === 4 ? "grid-cols-4" : "grid-cols-2"}`}>
          {cols.map((col) => (
            <div key={col.title} aria-labelledby={`${id}-${slug(col.title)}`}>
              <p id={`${id}-${slug(col.title)}`} className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-subtle">
                {col.title}
              </p>
              <ul className="space-y-0.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={onNavigate}
                      className="group/ml -mx-2 block rounded-md px-2 py-1.5 text-[0.9rem] text-ink-800 transition-colors hover:bg-platinum hover:text-blue-600"
                    >
                      <span className="font-medium">{l.label}</span>
                      {l.description && <span className="mt-0.5 block text-[0.8rem] leading-snug text-text-subtle">{l.description}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-[300px] flex-col justify-between gap-6 rounded-[14px] bg-ink-900 p-6 text-white on-dark">
          {item.feature ? (
            <div>
              <p className="eyebrow">{item.feature.eyebrow}</p>
              <p className="mt-3 font-display text-xl font-bold leading-snug">{item.feature.title}</p>
              <p className="mt-2 text-sm text-white/70">{item.feature.text}</p>
            </div>
          ) : (
            <div>
              <p className="eyebrow">Explore</p>
              <p className="mt-3 font-display text-xl font-bold leading-snug">All {item.label.toLowerCase()}</p>
              <p className="mt-2 text-sm text-white/70">See every {item.label.toLowerCase()} page in one place.</p>
            </div>
          )}
          <div className="flex flex-col gap-2">
            {item.feature && (
              <Link href={item.feature.href} onClick={onNavigate} className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-white">
                {item.feature.cta} <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            )}
            <Link href={item.href} onClick={onNavigate} className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white">
              {item.label} overview <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
