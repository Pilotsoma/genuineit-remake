import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { PatternArt } from "@/components/graphics/PatternArt";

/**
 * Inner-page hero. "dark" is the default editorial navy band; "light" is used for
 * utility pages (forms, compliance, legal) where a calmer opening reads better.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  seed,
  tone = "dark",
  aside,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
  seed?: string;
  tone?: "dark" | "light";
  aside?: ReactNode;
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <section
      className={`relative overflow-hidden pt-[calc(var(--header-h)+2.5rem)] ${
        dark ? "on-dark bg-ink-900 text-white" : "border-b border-line bg-platinum text-ink-900"
      }`}
    >
      {dark ? (
        <>
          <div aria-hidden="true" className="grid-backdrop pointer-events-none absolute inset-0" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 h-full w-[62%] opacity-90 max-md:opacity-40">
            <PatternArt seed={seed ?? title} className="h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/40 to-transparent" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 size-[520px] rounded-full bg-blue-600/20 blur-3xl" />
        </>
      ) : (
        <div aria-hidden="true" className="grid-backdrop-light pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      )}
      <div className="container-x relative pb-16 md:pb-20">
        <Breadcrumbs items={crumbs} dark={dark} />
        <div className={`mt-8 grid gap-10 ${aside ? "lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-end" : ""}`}>
          <div className="max-w-3xl motion-safe:animate-rise">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className={`h-page mt-4 ${dark ? "text-white" : "text-ink-900"}`}>{title}</h1>
            {lead && <p className="lead mt-6 max-w-2xl">{lead}</p>}
            {children}
          </div>
          {aside && <div className="motion-safe:animate-fade">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
