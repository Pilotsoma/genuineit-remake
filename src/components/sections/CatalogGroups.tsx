import { catalog, type Section } from "@/lib/catalog";
import { ServiceCard } from "./Cards";

/** Grouped catalog listing: sticky group label on the left, cards on the right. */
export function CatalogGroups({ section, prepend }: { section: Section; prepend?: Record<string, { href: string; title: string; summary: string; icon: string }[]> }) {
  const cat = catalog[section];
  return (
    <div className="space-y-20 md:space-y-24">
      {cat.groups.map((g, gi) => {
        const pages = cat.pages.filter((p) => p.group === g.id);
        const extra = prepend?.[g.id] ?? [];
        return (
          <section key={g.id} aria-labelledby={`grp-${g.id}`} className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
            <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
              <span className="font-display text-sm font-bold tabular-nums text-blue-600">{String(gi + 1).padStart(2, "0")}</span>
              <h2 id={`grp-${g.id}`} className="mt-2 font-display text-[1.65rem] font-bold leading-tight text-ink-900">
                {g.title}
              </h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-text-muted">{g.description}</p>
              <p className="mt-4 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-text-subtle">
                {pages.length + extra.length} {pages.length + extra.length === 1 ? cat.singular.toLowerCase() : cat.label.toLowerCase()}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {extra.map((e, i) => (
                <ServiceCard key={e.href} href={e.href} title={e.title} summary={e.summary} icon={e.icon} index={i} />
              ))}
              {pages.map((p, i) => (
                <ServiceCard key={p.slug} href={`/${section}/${p.slug}/`} title={p.title} summary={p.summary} icon={p.icon} index={i + extra.length} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
