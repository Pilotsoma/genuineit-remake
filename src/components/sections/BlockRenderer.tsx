import { Check } from "lucide-react";
import type { Block, ListItem } from "@/types/content";

const itemTitle = (i: ListItem) => (typeof i === "string" ? i : i.title);
const itemText = (i: ListItem) => (typeof i === "string" ? undefined : i.text);

/**
 * Renders migrated content blocks with layouts chosen by block type/variant, so pages
 * built from the same data model still read differently. Alternate blocks sit on a
 * subtle platinum band to create rhythm.
 */
export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  let band = false;
  return (
    <>
      {blocks.map((block, idx) => {
        const isQuote = block.kind === "quote";
        if (!isQuote) band = idx === 0 ? false : !band;
        const bg = isQuote ? "" : band ? "bg-platinum" : "bg-white";
        return (
          <section key={idx} className={`${bg} ${isQuote ? "" : "py-[clamp(3.5rem,2.5rem+3vw,6rem)]"}`}>
            <BlockView block={block} first={idx === 0} />
          </section>
        );
      })}
    </>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-[clamp(1.6rem,1.25rem+1.4vw,2.35rem)] font-bold leading-[1.12] tracking-[-0.025em] text-ink-900">{children}</h2>;
}

function BlockView({ block, first }: { block: Block; first: boolean }) {
  switch (block.kind) {
    case "prose":
      return (
        <div className="container-x">
          <div className={`grid gap-8 ${block.heading ? "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16" : "max-w-3xl"}`}>
            {block.heading && (
              <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
                <span aria-hidden="true" className="mb-5 block h-1 w-10 rounded-full bg-blue-600" />
                <Heading>{block.heading}</Heading>
              </div>
            )}
            <div data-reveal className="prose-g">
              {block.body.map((p, i) => (
                <p key={i} className={i === 0 && first ? "!text-[1.2rem] !leading-[1.65] !text-ink-800" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      );

    case "quote":
      return (
        <div className="on-dark relative overflow-hidden bg-ink-800 py-16 text-white md:py-20">
          <div aria-hidden="true" className="grid-backdrop absolute inset-0" />
          <figure className="container-x relative" data-reveal>
            <span aria-hidden="true" className="block font-display text-7xl leading-none text-cyan-400">“</span>
            <blockquote className="mt-2 max-w-4xl font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.4rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
              {block.text}
            </blockquote>
            {block.attribution && <figcaption className="mt-6 text-white/70">{block.attribution}</figcaption>}
          </figure>
        </div>
      );

    case "split":
      return (
        <div className="container-x">
          {block.heading && (
            <div data-reveal className="mb-10 max-w-3xl">
              <Heading>{block.heading}</Heading>
            </div>
          )}
          <div className={`grid gap-5 ${block.columns.length >= 4 ? "md:grid-cols-2 xl:grid-cols-4" : block.columns.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
            {block.columns.map((col, ci) => (
              <div
                key={col.heading}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${ci * 70}ms` }}
                className="relative rounded-[14px] border border-line bg-white p-7 shadow-card"
              >
                <span aria-hidden="true" className="absolute inset-x-7 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-blue-600 to-cyan-400" />
                <h3 className="font-display text-xl font-bold text-ink-900">{col.heading}</h3>
                <ul className="mt-5 space-y-3">
                  {col.items.map((it, i) => (
                    <li key={i} className="flex gap-3 text-[0.97rem] leading-relaxed text-text-muted">
                      <span aria-hidden="true" className="mt-[0.62rem] size-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>
                        {itemText(it) ? (
                          <>
                            <strong className="font-semibold text-ink-800">{itemTitle(it)}.</strong> {itemText(it)}
                          </>
                        ) : (
                          itemTitle(it)
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );

    case "list":
      return (
        <div className="container-x">
          <div className={block.variant === "numbered" || block.variant === "cards" || block.variant === "grid" ? "" : "grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16"}>
            {(block.heading || block.intro) && (
              <div data-reveal className={`${block.variant === "numbered" || block.variant === "cards" || block.variant === "grid" ? "mb-10 max-w-3xl" : "lg:sticky lg:top-28 lg:self-start"}`}>
                {block.heading && <Heading>{block.heading}</Heading>}
                {block.intro && <p className="mt-4 text-[1.05rem] leading-relaxed text-text-muted">{block.intro}</p>}
              </div>
            )}
            <div>
              <ListBody block={block} />
              {block.outro && (
                <p data-reveal className="mt-8 max-w-3xl border-l-2 border-blue-600 pl-5 text-[1.02rem] leading-relaxed text-ink-800">
                  {block.outro}
                </p>
              )}
            </div>
          </div>
        </div>
      );
  }
}

function ListBody({ block }: { block: Extract<Block, { kind: "list" }> }) {
  const items = block.items;
  switch (block.variant) {
    case "pills":
      return (
        <ul data-reveal className="flex flex-wrap gap-2.5">
          {items.map((it, i) => (
            <li key={i} className="rounded-full border border-line-strong bg-white px-4 py-2 text-[0.92rem] font-medium text-ink-800">
              {itemTitle(it)}
            </li>
          ))}
        </ul>
      );
    case "numbered":
      return (
        <ol className={`grid gap-px overflow-hidden rounded-[14px] border border-line bg-line ${items.length <= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : items.length <= 6 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
          {items.map((it, i) => (
            <li key={i} data-reveal style={{ ["--reveal-delay" as string]: `${i * 50}ms` }} className="flex flex-col gap-4 bg-white p-6 md:p-7">
              <span className="font-display text-sm font-bold tabular-nums text-blue-600">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-[1.08rem] font-semibold leading-snug text-ink-900">{itemTitle(it)}</span>
              {itemText(it) && <span className="text-[0.95rem] text-text-muted">{itemText(it)}</span>}
            </li>
          ))}
        </ol>
      );
    case "grid":
      return (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <li
              key={i}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 60}ms` }}
              className="group relative flex min-h-24 items-start gap-4 rounded-[12px] border border-line bg-white p-5 transition-[border-color,box-shadow] duration-300 hover:border-blue-600/40 hover:shadow-card"
            >
              <span aria-hidden="true" className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-md bg-blue-50 font-display text-xs font-bold text-blue-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.98rem] font-medium leading-snug text-ink-800">{itemTitle(it)}</span>
            </li>
          ))}
        </ul>
      );
    case "cards": {
      const n = items.length;
      return (
        <ul className={`grid gap-4 sm:grid-cols-2 ${n === 4 ? "lg:grid-cols-4" : n === 3 ? "lg:grid-cols-3" : "lg:grid-cols-3"}`}>
          {items.map((it, i) => {
            const feature = n === 5 && i === 0;
            return (
              <li
                key={i}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
                className={`group relative overflow-hidden rounded-[14px] border p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lift md:p-7 ${
                  feature ? "on-dark border-ink-800 bg-ink-900 text-white sm:col-span-2 lg:col-span-1 lg:row-span-2" : "border-line bg-white"
                }`}
              >
                <span aria-hidden="true" className={`mb-6 block h-8 w-8 rounded-lg ${feature ? "bg-cyan-400/15 ring-1 ring-cyan-400/40" : "bg-blue-50 ring-1 ring-blue-600/15"} grid place-items-center`}>
                  <Check className={`size-4 ${feature ? "text-cyan-400" : "text-blue-600"}`} strokeWidth={2.2} />
                </span>
                <h3 className={`font-display text-[1.15rem] font-bold leading-snug ${feature ? "text-white" : "text-ink-900"}`}>{itemTitle(it)}</h3>
                {itemText(it) && <p className={`mt-2.5 text-[0.95rem] leading-relaxed ${feature ? "text-white/75" : "text-text-muted"}`}>{itemText(it)}</p>}
              </li>
            );
          })}
        </ul>
      );
    }
    case "columns":
      return (
        <ul data-reveal className="grid gap-x-10 sm:grid-cols-2">
          {items.map((it, i) => (
            <li key={i} className="border-t border-line py-4 text-[0.98rem] leading-relaxed text-ink-800">
              {itemText(it) ? (
                <>
                  <span className="block font-semibold text-ink-900">{itemTitle(it)}</span>
                  <span className="mt-1 block text-text-muted">{itemText(it)}</span>
                </>
              ) : (
                itemTitle(it)
              )}
            </li>
          ))}
        </ul>
      );
    case "check":
    default:
      return (
        <ul data-reveal className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <li key={i} className="flex gap-3.5 text-[0.98rem] leading-relaxed text-ink-800">
              <span aria-hidden="true" className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-blue-600 text-white">
                <Check className="size-3.5" strokeWidth={2.6} />
              </span>
              <span>
                {itemTitle(it)}
                {itemText(it) && <span className="block text-text-muted">{itemText(it)}</span>}
              </span>
            </li>
          ))}
        </ul>
      );
  }
}
