import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { PatternArt } from "@/components/graphics/PatternArt";

export function ServiceCard({
  href,
  title,
  summary,
  icon,
  index,
  meta,
}: {
  href: string;
  title: string;
  summary: string;
  icon?: string;
  index?: number;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      data-reveal
      style={index !== undefined ? { ["--reveal-delay" as string]: `${(index % 3) * 60}ms` } : undefined}
      className="group relative flex h-full flex-col rounded-[14px] border border-line bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-lift md:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-[12px] bg-blue-50 text-blue-600 ring-1 ring-blue-600/10 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Icon name={icon} className="size-[22px]" />
        </span>
        <ArrowUpRight aria-hidden="true" className="size-5 text-text-subtle transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
      </div>
      <h3 className="mt-6 font-display text-[1.2rem] font-bold leading-snug text-ink-900">{title}</h3>
      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-text-muted">{summary}</p>
      {meta && <p className="mt-auto pt-5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-text-subtle">{meta}</p>}
    </Link>
  );
}

/** Larger visual card used for industries (abstract art instead of stock photography). */
export function IndustryCard({ href, title, summary, icon, index = 0 }: { href: string; title: string; summary: string; icon?: string; index?: number }) {
  return (
    <Link
      href={href}
      data-reveal
      style={{ ["--reveal-delay" as string]: `${(index % 3) * 60}ms` }}
      className="on-dark group relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[16px] bg-ink-900 p-6 text-white md:p-7"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
        <PatternArt seed={href} className="h-full w-full" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-900/10" />
      <span className="mb-auto grid size-11 place-items-center rounded-[10px] bg-white/10 text-cyan-400 ring-1 ring-white/15 backdrop-blur-sm">
        <Icon name={icon} className="size-5" />
      </span>
      <h3 className="mt-16 font-display text-[1.35rem] font-bold leading-tight">{title}</h3>
      <p className="mt-2 text-[0.93rem] leading-relaxed text-white/75">{summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400">
        Explore <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
